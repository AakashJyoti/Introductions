import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import searchLogo from "../../assets/search.svg";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from "../../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChatLoading from "../ChatLoading";
import UserListItem from "../userAvatar/UserListItem";
import { getSender } from "../../config/chatLogics";
const { VITE_SERVER_URL } = import.meta.env;

export default function Sidebar() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chatLoading, setChatLoading] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter something to search",
        status: "warning",
        duration: 1000,
        inClosable: true,
        position: "top-left",
      });
    }

    try {
      setLoading(true);
      const { data } = await axios.get(
        `${VITE_SERVER_URL}/api/user?search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Search error",
        description: "Fail to load the search results",
        status: "error",
        duration: 1000,
        inClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  const accessChat = async (userId) => {
    try {
      setChatLoading(true);
      const { data } = await axios.post(
        `${VITE_SERVER_URL}/api/chat`,
        { userId },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (!chats.find((c) => c._id === data._id)) {
        setChats((prev) => [data, ...prev]);
      }
      setSelectedChat(data);
      setChatLoading(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 1000,
        inClosable: true,
        position: "bottom-left",
      });
      setChatLoading(false);
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"white"}
        w="100%"
        p={"5px 10px 5px 10px"}
        borderWidth={"5px"}
      >
        <Tooltip label="Search user to chat" hasArrow placement="bottom-end">
          <Button variant={"ghost"}>
            <img
              src={searchLogo}
              alt="search"
              style={{ width: "1rem", height: "1rem" }}
            />
            <Text
              display={{ base: "none", md: "flex" }}
              px={4}
              onClick={onOpen}
            >
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize={"2xl"}>Chat-ea-lo</Text>

        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize={"2xl"} m={1} />
            </MenuButton>
            <MenuList p={2}>
              {!notification.length && "No New Messages"}
              {notification.map((note) => (
                <MenuItem
                  key={note._id}
                  onClick={() => {
                    setSelectedChat(note.chat);
                    setNotification(notification.filter((n) => n !== note));
                  }}
                >
                  {note?.chat?.isGroupChat
                    ? `New Message in ${notification.chat.chatName}`
                    : `New Message from ${getSender(user, note.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size={"sm"}
                cursor={"pointer"}
                name={user?.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Search user</DrawerHeader>
          <DrawerBody>
            <Box display={"flex"} pb={2}>
              <Input
                placeholder="Search by name or mail"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>

            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {chatLoading && <Spinner ml={"auto"} display={"flex"} />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

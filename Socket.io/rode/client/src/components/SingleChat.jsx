import {
  Box,
  FormControl,
  IconButton,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../context/ChatProvider";
import { getSender, getSenderData } from "../config/chatLogics";
import ProfileModal from "./miscellaneous/ProfileModal";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";
import ScrollableChar from "./ScrollableChar";
import io from "socket.io-client";
import Lottie from "react-lottie";

import animationData from "../assets/loading.json";
const { VITE_SERVER_URL } = import.meta.env;

const ENDPOINT = "http://localhost:4500";
let socket, selectedChatCompare;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function SingleChat({ fetchAgain, setFetchAgain }) {
  const { user, selectedChat, setSelectedChat, notification, setNotification } =
    ChatState();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const toast = useToast();

  const fetchMessages = async () => {
    if (!selectedChat) return;
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${VITE_SERVER_URL}/api/message/${selectedChat._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setMessages(data);
      setLoading(false);
      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: error.messages,
        status: "error",
        duration: 5000,
        inClosable: true,
        position: "bottom",
      });
    }
  };

  const sendMessage = async (e) => {
    if (e.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {
        const { data } = await axios.post(
          `${VITE_SERVER_URL}/api/message`,
          {
            content: newMessage,
            chatId: selectedChat._id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        socket.emit("new message", data);
        setNewMessage("");
        setMessages((prev) => [...prev, data]);
      } catch (error) {
        toast({
          title: error.messages,
          status: "error",
          duration: 5000,
          inClosable: true,
          position: "bottom",
        });
      }
    }
  };

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    // Typing indicator message
    if (!socketConnected) return;
    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    let timerLength = 3000;

    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDifference = timeNow - lastTypingTime;

      if (timeDifference >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  useEffect(() => {
    socket = io.connect(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        if (!notification.includes(newMessageReceived)) {
          setNotification((prev) => [newMessageReceived, ...prev]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages((prev) => [...prev, newMessageReceived]);
      }
    });
  }, []);

  return (
    <>
      <Text
        fontSize={{ base: "28px", md: "30px" }}
        pb={3}
        px={2}
        width={"100%"}
        display={"flex"}
        justifyContent={{ base: "space-between" }}
        alignItems={"center"}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<ArrowBackIcon />}
          onClick={() => setSelectedChat("")}
        />
        {!selectedChat.isGroupChat ? (
          <>
            {getSender(user, selectedChat.users)}
            <ProfileModal user={getSenderData(user, selectedChat.users)} />
          </>
        ) : (
          <>
            {selectedChat.chatName.toUpperCase()}
            <UpdateGroupChatModal
              fetchAgain={fetchAgain}
              setFetchAgain={setFetchAgain}
              fetchMessages={fetchMessages}
            />
          </>
        )}
      </Text>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"flex-end"}
        p={3}
        bg={"#E8E8E8"}
        w="100%"
        h="100%"
        borderRadius={"lg"}
        overflowY={"hidden"}
      >
        {loading ? (
          <Spinner
            size={"xl"}
            w={20}
            h={20}
            alignSelf={"center"}
            margin={"auto"}
          />
        ) : (
          <div className="messages">
            <ScrollableChar messages={messages} />
          </div>
        )}
        {isTyping ? (
          <div>
            <Lottie
              options={defaultOptions}
              width={70}
              style={{ marginBottom: 15, marginLeft: 0 }}
            />
          </div>
        ) : (
          <></>
        )}
      </Box>
      <FormControl onKeyDown={sendMessage} isRequired mt={3}>
        <Input
          variant={"filled"}
          bg={"#E0E0E0"}
          onChange={typingHandler}
          value={newMessage}
          placeholder="Enter your message"
        />
      </FormControl>
    </>
  );
}

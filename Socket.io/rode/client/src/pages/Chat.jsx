import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider.jsx";
import Sidebar from "../components/miscellaneous/Sidebar.jsx";
import ChatBox from "../components/ChatBox.jsx";
import MyChats from "../components/MyChats.jsx";
import { useState } from "react";

export default function Chat() {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <Sidebar />}

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        h={"91.5vh"}
        p={"10px"}
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
}

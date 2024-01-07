import { Box, Stack } from "@mui/material";
import React from "react";
import NavPanel from "../components/Layout/NavPanel";
import MessagesList from "../components/Chat/MessagesList";
import SendMessageForm from "../components/Forms/SendMessageForm";
import ChatPanel from "../components/Layout/ChatPanel";

const ChatPage: React.FC = () => {
  return (
    <>
      <ChatPanel />
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          left: "15%",
          position: "absolute",
          height: "100vh",
          width: "70%",
          pt: 5,
        }}
      >
        <MessagesList />
        <SendMessageForm />
      </Stack>
    </>
  );
};

export default ChatPage;

import { Box, Stack } from "@mui/material";
import React from "react";
import NavPanel from "../components/Layout/NavPanel";
import MessagesList from "../components/Chat/MessagesList";
import SendMessageForm from "../components/Forms/SendMessageForm";

const ChatPage: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#171717",
        height: "100vh",
        color: "white",
        display: "flex",
      }}
    >
      <NavPanel />
      <Stack
        direction={"column"}
        alignItems={"center"}
        sx={{
          left: "10%",
          position: "absolute",
          height: "100vh",
          width: "70%",
          pt: 5,
        }}
      >
        <MessagesList />
        <SendMessageForm />
      </Stack>
    </Box>
  );
};

export default ChatPage;

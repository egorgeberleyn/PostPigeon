import { Box, Stack, Typography } from "@mui/material";
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
      <Box
        sx={{
          left: "75%",
          position: "absolute",
          height: "100vh",
          bgcolor: "#111",
          width: "380px",
        }}
      >
        <Typography variant="h6" mt={2} textAlign={"center"}>
          Media
        </Typography>
      </Box>
    </>
  );
};

export default ChatPage;

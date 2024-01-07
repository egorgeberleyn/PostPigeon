import { Box, Stack } from "@mui/material";
import MessageItem from "./MessageItem";
import { useEffect, useState } from "react";
import { receiveMessages } from "../../app/chatClient";
import useLocalStorage from "../../app/hooks/useLocalStorage";
import { Message } from "../../app/types/Message";
import { decodeToken } from "../../app/utils/tokenHelpers";

const MessagesList = () => {
  const { storedValue } = useLocalStorage("token", "");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      var chatStream = await receiveMessages();
      chatStream.on("data", (response) => {
        const senderId = response.getSenderId();

        const jwtPayload = decodeToken(storedValue);
        if (senderId === jwtPayload.sub)
          setMessages((oldArray) => [
            ...oldArray,
            { isOwn: true, text: response.getTextMessage() },
          ]);
        else
          setMessages((oldArray) => [
            ...oldArray,
            { isOwn: false, text: response.getTextMessage() },
          ]);
      });
    };
    fetchData();
  }, []);

  return (
    <Box
      width={"800px"}
      sx={{
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
          background: "#222222",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#fff",
        },
        display: "flex",
        justifyContent: "center",
      }}
      mb={5}
    >
      <Stack width="80%" direction={"column"}>
        <MessageItem text="Actually there is." isOwn={false} />
        <MessageItem
          text="I need to know the privacy policy of your business in a very short summary."
          isOwn={false}
        />
        {messages.map((message, index) => (
          <MessageItem key={index} text={message.text} isOwn={message.isOwn} />
        ))}
      </Stack>
    </Box>
  );
};

export default MessagesList;

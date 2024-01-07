import { Box } from "@mui/material";
import { FC } from "react";

interface MessageProps {
  text: string;
  isOwn: boolean;
}

const MessageItem: FC<MessageProps> = ({ text, isOwn }) => {
  return isOwn ? (
    <Box
      bgcolor={"#0FCBCB"}
      mt={2}
      mr={6}
      pr={2}
      pl={1}
      py={1}
      sx={{
        maxWidth: "250px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        fontSize: "18px",
        alignSelf: "end",
      }}
    >
      {text}
    </Box>
  ) : (
    <Box
      bgcolor={"#333"}
      mt={2}
      pr={2}
      pl={1}
      py={1}
      sx={{
        maxWidth: "250px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        fontSize: "18px",
        alignSelf: "start"
      }}
    >
      {text}
    </Box>
  );
};

export default MessageItem;

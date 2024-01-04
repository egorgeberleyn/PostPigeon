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
      ml={20}
      p={1}
      sx={{
        maxWidth: "230px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      {text}
    </Box>
  ) : (
    <Box
      bgcolor={"#333"}
      mt={2}
      p={1}
      sx={{
        maxWidth: "230px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      {text}
    </Box>
  );
};

export default MessageItem;

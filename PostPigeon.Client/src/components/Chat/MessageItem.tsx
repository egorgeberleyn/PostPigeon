import { Avatar, Box, Stack } from "@mui/material";
import { Offline, Online } from "react-detect-offline";
import { FC } from "react";
import { theme } from "../../Theme";
import StyledBadge from "./StyledBadge";

interface MessageProps {
  text: string;
  isOwn: boolean;
}

const MessageItem: FC<MessageProps> = ({ text, isOwn }) => {
  return isOwn ? (
    <Box
      bgcolor={theme.palette.secondary.main}
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
    <Stack direction={"row"}>
      <Offline>
        <Avatar sx={{ width: "30px", height: "30px", alignSelf: "end", mr: 1 }}>
          A
        </Avatar>
      </Offline>

      <Online>
        <StyledBadge>
          <Avatar
            sx={{ width: "30px", height: "30px", alignSelf: "end", mr: 1 }}
          >
            A
          </Avatar>
        </StyledBadge>
      </Online>

      <Box
        bgcolor={theme.palette.info.dark}
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
        }}
      >
        {text}
      </Box>
    </Stack>
  );
};

export default MessageItem;

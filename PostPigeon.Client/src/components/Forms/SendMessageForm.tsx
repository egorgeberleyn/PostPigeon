import { Box, IconButton, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FormEventHandler } from "react";
import { getInputValue } from "../../app/utils/formHelpers";
import { sendMessage } from "../../app/chatClient";
import useLocalStorage from "../../app/hooks/useLocalStorage";
import { decodeToken } from "../../app/utils/tokenHelpers";

const SendMessageForm = () => {
  const { storedValue } = useLocalStorage("token", "");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const message = getInputValue(event, "message");
    const jwtPayload = decodeToken(storedValue);

    if (message) sendMessage(jwtPayload.sub!, message);
  };

  return (
    <Box sx={{ margin: "auto 0 15px 0" }}>
      <form onSubmit={handleSubmit}>
        <Stack direction={"row"}>
          <TextField
            name="message"
            type="text"
            variant="outlined"
            focused={false}
            placeholder="Your message..."
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: "400px",
            }}
          />
          <IconButton type="submit">
            <SendIcon sx={{ color: "#0FCBCB", fontSize: "30px", ml: 1 }} />
          </IconButton>
        </Stack>
      </form>
    </Box>
  );
};

export default SendMessageForm;

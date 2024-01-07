import {
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const ChatPanel = () => {
  return (
    <Box
      sx={{
        width: 270,
        bgcolor: "#111",
        height: "100%",
        color: "white",
        borderTopRightRadius: "10px",
      }}
    >
      <Box>
        <Typography variant="h6" mt={2} textAlign={"center"}>Chats</Typography>
        <List>
          <ListItem>
           
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ChatPanel;

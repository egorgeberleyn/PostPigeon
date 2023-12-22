import { Box } from "@mui/material";
import React from "react";
import NavPanel from "../components/Layout/NavPanel";

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
      <Box sx={{left: "10%", position: "absolute", height: "100vh", width: "70%", pt: 5, bgcolor: "gray"}}>
        
      </Box>
    </Box>
  );
};

export default ChatPage;

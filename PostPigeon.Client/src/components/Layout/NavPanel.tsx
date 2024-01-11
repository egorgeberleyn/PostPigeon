import { Chat, Person2, Menu, Logout } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutForm from "../Forms/LogoutForm";

const sections = [
  { name: "Profile", icon: <Person2 />, link: "/profile" },
  { name: "Chats", icon: <Chat />, link: "/" },
];

const NavPanel = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [openLogout, setOpenLogout] = useState(false);
  const handleOpen = () => setOpenLogout(true);
  const handleClose = () => setOpenLogout(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  const list = () => (
    <Box
      sx={{
        width: 250,
        bgcolor: "#222222",
        height: "100%",
        color: "white",
        borderTopRightRadius: "10px",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sections.map((section) => (
          <ListItem
            key={section.name}
            sx={{ m: 0, p: "10px 5px 5px 5px" }}
            onClick={() => navigate(section.link)}
          >
            <ListItemButton sx={{ m: 0, "&:hover": { bgcolor: "gray" } }}>
              <ListItemIcon sx={{ color: "secondary.main" }}>
                {section.icon}
              </ListItemIcon>
              <ListItemText primary={section.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ m: 0, p: "10px 5px 5px 5px" }}>
          <ListItemButton sx={{ m: 0, "&:hover": { bgcolor: "gray" } }}>
            <ListItemIcon sx={{ color: "secondary.main" }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ bgcolor: "#333" }} />
    </Box>
  );

  return (
    <>
      {!open && (
        <Box
          sx={{
            width: 60,
            bgcolor: "#222222",
            height: "100%",
            color: "white",
          }}
        >
          <Box>
            <List>
              <ListItem>
                <ListItemButton
                  sx={{ p: 0, mb: 2 }}
                  onClick={toggleDrawer(true)}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <Menu />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              {sections.map((section) => (
                <ListItem
                  key={section.name}
                  onClick={() => navigate(section.link)}
                >
                  <ListItemButton sx={{ p: 0, mb: 2 }}>
                    <ListItemIcon sx={{ color: "secondary.main" }}>
                      {section.icon}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem onClick={handleOpen}>
                <ListItemButton sx={{ p: 0, mb: 2 }}>
                  <ListItemIcon sx={{ color: "secondary.main" }}>
                    <Logout />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      )}
      <Drawer
        anchor={"left"}
        onClose={toggleDrawer(false)}
        open={open}
        PaperProps={{ sx: { bgcolor: "inherit" } }}
      >
        {list()}
      </Drawer>
      <Modal open={openLogout} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "#D3D3D3",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
          }}
        >
          <LogoutForm close={handleClose}/>
        </Box>
      </Modal>
    </>
  );
};

export default NavPanel;

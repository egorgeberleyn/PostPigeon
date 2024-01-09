import { Avatar, Box, Modal, Stack, Typography } from "@mui/material";
import EditProfileForm from "../components/Forms/EditProfileForm";
import { Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ChangeAvatarForm from "../components/Forms/ChangeAvatarForm";
import { getProfile } from "../app/profilesClient";
import useLocalStorage from "../app/hooks/useLocalStorage";
import { decodeToken } from "../app/utils/tokenHelpers";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState({ value: "" });

  const { storedValue } = useLocalStorage("token", "");
  const claims = decodeToken(storedValue);

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getProfile(claims.userId);

      setUsername(profile.username);
      setEmail(profile.email);
      setAvatar(profile.avatar);
    };
    fetchData();
  }, []);

  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          left: "10%",
          position: "absolute",
          width: "70%",
          mt: 7,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4" sx={{ ml: 3 }}>
            Your profile
          </Typography>
          <Stack direction={"row"}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={avatar ? `data:image/png;base64,${avatar.value}` : ""}
            />
            <Edit
              sx={{ alignSelf: "end", cursor: "pointer" }}
              onClick={handleOpen}
            />
          </Stack>
        </Stack>
        <EditProfileForm
          email={email}
          username={username}
          setUsername={setUsername}
          setEmail={setEmail}
        />
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "#D3D3D3",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
          }}
        >
          <ChangeAvatarForm close={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default ProfilePage;

import { Avatar, Box, Stack, Typography } from "@mui/material";
import EditProfileForm from "../components/Forms/EditProfileForm";
import { Edit } from "@mui/icons-material";

const ProfilePage = () => {
  return (
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
        <Typography variant="h4">Edit profile</Typography>
        <Stack direction={"row"}>
          <Avatar sx={{ width: 100, height: 100 }}/>
          <Edit sx={{alignSelf: "end", cursor: "pointer"}}/>
        </Stack>
      </Stack>
      <EditProfileForm />
    </Stack>
  );
};

export default ProfilePage;

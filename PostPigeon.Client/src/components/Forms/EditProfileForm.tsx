import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, FormEventHandler, useState } from "react";
import { updateProfile } from "../../app/profilesClient";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import { theme } from "../../Theme";

interface EditProfileFormProps {
  username: string;
  email: string;
  setUsername: (name: string) => void;
  setEmail: (email: string) => void;
}

const EditProfileForm: FC<EditProfileFormProps> = ({
  username,
  email,
  setUsername,
  setEmail,
}) => {
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    updateProfile(username, email, password).catch((error) =>
      setError(error.message)
    );
    setOpen(true);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        {error ? (
          <Alert
            onClose={() => setOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            An error occurred during the update
          </Alert>
        ) : (
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your profile has been successfully updated
          </Alert>
        )}
      </Snackbar>
      <form onSubmit={handleSubmit}>
        <Stack direction={"column"} height={"400px"}>
          <Stack direction={"row"}>
            <Box>
              <Typography mb={1} ml={4}>
                Username
              </Typography>
              <Stack direction={"row"} alignItems={"center"}>
                <BadgeIcon sx={{ color: "info.main", mr: 1, my: 0.5 }} />
                <TextField
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                  type="text"
                  name="name"
                  focused={false}
                  sx={{
                    borderRadius: "10px",
                    width: "300px",
                    input: {
                      color: theme.palette.info.main,
                      boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
                      borderRadius: "10px",
                    },
                  }}
                />
              </Stack>
            </Box>

            <Box sx={{ ml: 10 }}>
              <Typography mb={1} ml={4}>
                Password
              </Typography>
              <Stack direction={"row"} alignItems={"center"}>
                <PasswordIcon sx={{ color: "info.main", mr: 1, my: 0.5 }} />
                <TextField
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  name="password"
                  focused={false}
                  sx={{
                    borderRadius: "10px",
                    width: "300px",
                    input: {
                      color: theme.palette.info.main,
                      boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
                      borderRadius: "10px",
                    },
                  }}
                />
              </Stack>
            </Box>
          </Stack>
          <Box sx={{ mt: 8 }}>
            <Typography mb={1} ml={4}>
              Email
            </Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <AlternateEmailIcon sx={{ color: "info.main", mr: 1, my: 0.5 }} />
              <TextField
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="text"
                name="email"
                focused={false}
                sx={{
                  borderRadius: "10px",
                  width: "350px",
                  input: {
                    color: theme.palette.info.main,
                    boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
                    borderRadius: "10px",
                  },
                }}
              />
            </Stack>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "lightgray",
              color: "black",
              px: 6,
              margin: "auto 0 0 0",
              width: "150px",
            }}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EditProfileForm;

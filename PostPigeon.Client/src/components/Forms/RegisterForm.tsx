import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import React, { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../app/authClient";
import useLocalStorage from "../../app/hooks/useLocalStorage";
import ErrorMessage from "../Common/ErrorMessage";
import { getInputValue } from "../../app/utils/formHelpers";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { setValue } = useLocalStorage("token", "");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const name = getInputValue(event, "name");
    const password = getInputValue(event, "password");
    const confirmPassword = getInputValue(event, "confirmPassword");

    if (password === confirmPassword) {
      setError('Fields "password" and "confirmPassword" don\'t match');
      return;
    }

    if (name && password)
      register(name, password)
        .then((tokenPair) => {
          setValue(tokenPair.accessToken);
          navigate("/");
        })
        .catch((error) => setError(error.message));
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 4,
        borderRadius: "10px",
        bgcolor: "#171717",
        boxShadow: "0 15px 25px rgba(0,0,0,.6)",
      }}
    >
      <form style={{ width: "330px" }} onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
          Register
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "gray", textAlign: "center", mt: 1 }}
        >
          Please sign up to continue
        </Typography>
        {error && <ErrorMessage text={error} condition={error !== null} />}
        <Stack direction="column" spacing={2} sx={{ mt: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AlternateEmailIcon sx={{ color: "info.main", mr: 1, my: 0.5 }} />
            <TextField
              name="name"
              type="text"
              label="Name"
              fullWidth
              sx={{
                label: { color: "gray" },
                input: {
                  color: "#d3d3d3",
                  boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LockIcon sx={{ color: "info.main", mr: 1, my: 0.5 }} />
            <TextField
              name="password"
              type="password"
              label="Password"
              fullWidth
              sx={{
                label: { color: "gray" },
                input: {
                  color: "#d3d3d3",
                  boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EnhancedEncryptionIcon
              sx={{ color: "info.main", mr: 1, my: 0.5 }}
            />
            <TextField
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              fullWidth
              sx={{
                label: { color: "gray" },
                input: {
                  color: "#d3d3d3",
                  boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
                  borderRadius: "10px",
                },
              }}
            />
          </Box>
        </Stack>
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "space-evenly",
            bgColor: "white",
          }}
        >
          <Button
            onClick={() => navigate("/auth/login")}
            variant="contained"
            sx={{ bgcolor: "#252525", color: "white", px: 6 }}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "lightgray", color: "black", px: 6, ml: 4 }}
          >
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;

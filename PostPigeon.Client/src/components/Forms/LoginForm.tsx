import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

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
      <form style={{ width: "330px" }}>
        <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
          Login
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "gray", textAlign: "center", mt: 1 }}
        >
          Please enter valid credentials
        </Typography>
        <Stack direction="column" spacing={2} sx={{ mt: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AlternateEmailIcon sx={{ color: "info.main", mr: 1, my: 0.5 }} />
            <TextField
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
            variant="contained"
            sx={{ bgcolor: "lightgray", color: "black", px: 6 }}
          >
            Log in
          </Button>
          <Button
            onClick={() => navigate("/register")}
            variant="contained"
            sx={{ bgcolor: "#252525", color: "white", px: 6, ml: 4 }}
          >
            Sign up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;

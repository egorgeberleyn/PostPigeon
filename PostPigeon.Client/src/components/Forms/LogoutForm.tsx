import { Box, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { logout } from "../../app/authClient";

interface LogoutFormProps {
  close: () => void;
}

const LogoutForm: FC<LogoutFormProps> = ({ close }) => {
  return (
    <Box>
      <button
        onClick={close}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",
          background: "rgba(250, 44, 44)",
          transform: "translate(6px, -4px)",
          padding: "2px 8px",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        X
      </button>
      <Typography variant="h6">
        Do you really want to log out of your account?
      </Typography>
      <Stack direction={"row"} justifyContent={"space-evenly"} sx={{ mt: 4 }}>
        <Button
          onClick={() => logout()}
          variant="contained"
          sx={{
            bgcolor: "info.dark",
            color: "white",
            ":hover": { bgcolor: "black" },
          }}
        >
          Absolutely
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "secondary.main", color: "white" }}
          onClick={close}
        >
          I think I'll stay.
        </Button>
      </Stack>
    </Box>
  );
};

export default LogoutForm;

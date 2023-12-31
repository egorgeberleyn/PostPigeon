import { Chip, Fade } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { FC } from "react";

interface ErrorMessageProps {
  text: string;
  condition: boolean;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ text, condition }) => {
  return (
    <Fade in={condition} timeout={700}>
      <Chip
        icon={<ErrorIcon />}
        label={text}
        variant="filled"
        color="error"
        sx={{ width: "100%", mt: 2 }}
      />
    </Fade>
  );
};

export default ErrorMessage;

import { Badge, styled } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const StyledBadge: FC<PropsWithChildren> = ({ children }) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
      top: "45px",
      minWidth: "7px",
      height: "6px",
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "50%",
        height: "50%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      variant="dot"
    >
      {children}
    </StyledBadge>
  );
};

export default StyledBadge;

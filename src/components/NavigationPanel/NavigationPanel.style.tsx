import { Link, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Logo = styled(Typography)(({ theme }) => ({
  width: "83px",
  height: "46px",
  [theme.breakpoints.down("lg")]: {
    width: "68px",
    height: "38px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "46px",
    height: "26px",
  },
}));

export const NavigationLink = styled(Link)(({ theme }) => ({
  variant: "default",
  color: "#373737",
  textDecoration: "none !important",
  cursor: "pointer",

  "&::before": {
    content: "''",
    position: "absolute",
    bottom: "-5px",
    left: "0",
    width: "0%",
    height: "3px",
    backgroundColor: "white",
    transitionDuration: "0.5s",
  },
  "&:hover::before": {
    width: "100%",
    transitionDuration: "0.5s",
  },
  "&:hover": {
    color: "white",
  },
}));

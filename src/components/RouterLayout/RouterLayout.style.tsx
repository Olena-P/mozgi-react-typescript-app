import { Box, styled } from "@mui/material";

export const RouterLayoutContainer = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
}));

export const RouterLayoutContent = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "578px",
  height: "578px",
  [theme.breakpoints.down("lg")]: {
    width: "482px",
    height: "482px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "294px",
    height: "294px",
  },
}));

export const RouterLayoutContentBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: "1",
  width: "578px",
  height: "578px",
  borderRadius: "50%",
  backgroundColor: "#FFCB46",
  filter: "blur(38px)",
  [theme.breakpoints.down("lg")]: {
    width: "482px",
    height: "482px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "294px",
    height: "294px",
  },
}));

export const RouterLayoutContentShowreel = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: "2",
  bottom: "0",
  right: "0",
  cursor: "pointer",
  transition: "transform 5s",

  "&:hover": {
    transform: "rotate(-360deg)",
  },

  "& img": {
    width: "118px",
    height: "118px",

    [theme.breakpoints.down("lg")]: {
      width: "112px",
      height: "112px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "87px",
      height: "87px",
    },
  },
}));

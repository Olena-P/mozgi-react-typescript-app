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
  width: "1033px",
  height: "578px",
  [theme.breakpoints.down("lg")]: {
    width: "482px",
    height: "482px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "337px",
    height: "350px",
  },
}));

export const RouterLayoutContentBackground = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: "2",
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

export const TickerBox = styled(Box)(() => ({
  position: "absolute",
  top: "0",
  right: "0",
  width: "120vw",
  height: "100vh",
  zIndex: "0",
}));

export const TickerItemTop = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "-100px",
  width: "130vw",

  fontFamily: "Grtsk Giga",
  fontStyle: "italic",
  fontWeight: "700",
  fontSize: "52px",
  lineHeight: "110%",
  textTransform: "uppercase",
  opacity: "0.1",
  color: "transparent",
  "-webkit-text-stroke-width": " 1px",
  "-webkit-text-stroke-color": "#616161",
  transform: "rotate(150deg)",

  [theme.breakpoints.down("lg")]: {
    left: "50px",
    fontSize: "42px",
    transform: "rotate(143.39deg)",
  },
  [theme.breakpoints.down("md")]: {
    transform: "rotate(126.8deg)",
  },
  [theme.breakpoints.down("sm")]: {
    left: "-100px",
    width: "200vw",
    fontSize: "28px",
    transform: "rotate(-240deg)",
  },

  "& div": {
    height: "50px",
    width: "fit-content",
    [theme.breakpoints.down("lg")]: {
      height: "42px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "28px",
    },
  },
}));

export const TickerItemBottom = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "55%",
  left: "-100px",
  width: "130vw",

  fontFamily: "Grtsk Giga",
  fontStyle: "italic",
  fontWeight: "700",
  fontSize: "52px",
  lineHeight: "110%",
  textTransform: "uppercase",
  opacity: "0.1",
  color: "transparent",
  "-webkit-text-stroke-width": " 1px",
  "-webkit-text-stroke-color": "#616161",
  transform: "rotate(-30deg)",

  [theme.breakpoints.down("lg")]: {
    left: "50px",
    fontSize: "42px",
    transform: "rotate(-36.61deg)",
  },
  [theme.breakpoints.down("md")]: {
    transform: "rotate(-53.2deg)",
  },
  [theme.breakpoints.down("sm")]: {
    left: "-100px",
    top: "58%",
    width: "200vw",
    fontSize: "28px",
    transform: "rotate(-61deg)",
  },

  "& div": {
    height: "50px",
    width: "fit-content",

    [theme.breakpoints.down("lg")]: {
      height: "42px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "28px",
    },
  },
}));

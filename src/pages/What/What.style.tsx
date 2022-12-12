import { styled, Typography } from "@mui/material";

export const WhatPageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Grtsk Giga",
  fontWeight: "700",
  fontSize: "82px",
  lineHeight: "110%",
  textAlign: "center",
  textTransform: "uppercase",
  color: "#373737",
  [theme.breakpoints.down("lg")]: {
    fontSize: "58px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "34px",
  },
}));

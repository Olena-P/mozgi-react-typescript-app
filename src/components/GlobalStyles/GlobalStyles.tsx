import { Global } from "@emotion/react";
import theme from "../../theme/theme";

const GlobalStyles = (
  <Global
    styles={{
      body: {
        fontFamily: "Grtsk Giga",
        fontWeight: "bold",
        backgroundColor: theme.palette.case.contrast.gray1,
        overflow: "hidden",
        lineHeight: "10px !important",
        padding: "0",
        margin: "0",

        a: {
          textDecoration: "none",
          color: theme.palette.case.contrast.gray2,
          "&:hover": { opacity: "0.7" },
        },
      },
    }}
  />
);

export default GlobalStyles;

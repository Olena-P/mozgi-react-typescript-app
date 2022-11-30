import { Global } from "@emotion/react";
import theme from "../../theme/theme";

const GlobalStyles = (
  <Global
    styles={{
      body: {
        fontFamily: theme.typography.fontFamily,
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

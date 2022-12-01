import React, { FC, Suspense } from "react";
import { Outlet } from "react-router";
import { Box } from "@mui/system";
import {
  RouterLayoutContainer,
  RouterLayoutContent,
  RouterLayoutContentBackground,
  RouterLayoutContentShowreel,
} from "./RouterLayout.style";
import NavigationPanel from "../NavigationPanel";

type RouterLayoutProps = {
  children: JSX.Element;
};

const RouterLayout: FC<RouterLayoutProps> = ({ children }) => {
  return (
    <RouterLayoutContainer>
      <NavigationPanel />
      <Outlet />
      <Suspense fallback={<>...</>}>
        <RouterLayoutContent>
          <RouterLayoutContentBackground />
          <Box
            sx={{
              position: "absolute",
              zIndex: "2",
            }}
          >
            {children}
          </Box>
          <RouterLayoutContentShowreel>
            <img
              src={require("../../assets/Images/buttons.png")}
              alt="Showreel"
            />
          </RouterLayoutContentShowreel>
        </RouterLayoutContent>
      </Suspense>
      {/* <Box>
        <img
          src={require("../../assets/Images/background-string-top.png")}
          alt="EVENT AGENCY"
        />
        <img
          src={require("../../assets/Images/background-string-bottom.png")}
          alt="FULL-CYCLE"
        />
      </Box> */}
    </RouterLayoutContainer>
  );
};

export default RouterLayout;

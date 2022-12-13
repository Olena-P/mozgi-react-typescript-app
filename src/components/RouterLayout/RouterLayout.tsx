import React, { FC, Suspense } from "react";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import {
  RouterLayoutContainer,
  RouterLayoutContent,
  RouterLayoutContentBackground,
  RouterLayoutContentShowreel,
  TickerBox,
  TickerItemBottom,
  TickerItemTop,
} from "./RouterLayout.style";
import NavigationPanel from "../NavigationPanel";
import { HorizontalTicker } from "react-infinite-ticker";
import { ReactComponent as Schowreel } from "../../assets/Images/showreel.svg";

type RouterLayoutProps = {
  children: JSX.Element;
};

const RouterLayout: FC<RouterLayoutProps> = ({ children }) => {
  return (
    <RouterLayoutContainer>
      <NavigationPanel />
      <Outlet />
      <Suspense fallback={<>...</>}>
        <>
          <RouterLayoutContent>
            <Box sx={{ position: "relative", maxWidth: "578px" }}>
              <RouterLayoutContentBackground />
              <RouterLayoutContentShowreel>
                <Schowreel />
              </RouterLayoutContentShowreel>
            </Box>
            <Box
              sx={{
                position: "absolute",
                zIndex: "3",
              }}
            >
              {children}
            </Box>
          </RouterLayoutContent>
        </>
      </Suspense>

      <TickerBox>
        <TickerItemTop>
          <HorizontalTicker duration={25000} reverse={false}>
            <div>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</div>
          </HorizontalTicker>
        </TickerItemTop>
        <TickerItemBottom>
          <HorizontalTicker duration={25000}>
            <div>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</div>
          </HorizontalTicker>
        </TickerItemBottom>
      </TickerBox>
    </RouterLayoutContainer>
  );
};

export default RouterLayout;

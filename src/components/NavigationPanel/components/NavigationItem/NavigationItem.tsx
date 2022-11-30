import React, { FC } from "react";
import { Box } from "@mui/system";

type NavigationItemProps = {
  children?: React.ReactNode;
  handleChangeSelectedTab: (tab: string) => void;
  name: string;
};

const NavigationItem: FC<NavigationItemProps> = ({
  children,
  handleChangeSelectedTab,
  name,
}) => {
  return (
    <Box onClick={() => handleChangeSelectedTab(name)}>
      <Box>{children}</Box>
    </Box>
  );
};

export default NavigationItem;

import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { LogoImg, NavigationLink } from "./NavigationPanel.style";

const NavigationPanel = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileDisplay = useMediaQuery(`${theme.breakpoints.down("sm")}`);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: { xs: "34px", sm: "36px", md: "38px", lg: "46px" },
      }}
    >
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "16px",
          left: "46vw",
        }}
      >
        <LogoImg src={require("../../assets/Images/logo.png")} alt="Mozgi" />
      </Link>

      {isMobileDisplay ? (
        <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <DragHandleIcon sx={{ color: "#000000" }} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/what" style={{}}>
                What?
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/who" style={{}}>
                Who?
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/who" style={{}}>
                Where?
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Box>
          <NavigationLink
            onClick={() => navigate("/what")}
            style={{
              position: "absolute",
              top: "50vh",
              right: "20px",
              transform: "rotate(90deg)",
            }}
            variant="large_bolt"
          >
            what?
          </NavigationLink>
          <NavigationLink
            onClick={() => navigate("/who")}
            sx={{
              position: "absolute",
              bottom: "20px",
              right: "50vw",
            }}
            variant="large_bolt"
          >
            who?
          </NavigationLink>
          <NavigationLink
            onClick={() => navigate("/where")}
            sx={{
              position: "absolute",
              top: "50vh",
              left: "20px",
              transform: "rotate(90deg)",
            }}
            variant="large_bolt"
          >
            where?
          </NavigationLink>
        </Box>
      )}
    </Box>
  );
};

export default NavigationPanel;

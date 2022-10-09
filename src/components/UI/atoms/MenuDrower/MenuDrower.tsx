import "./MenuDrower.css";

import MenuIcon from "@mui/icons-material/Menu";
import MenuIconOutlined from "@mui/icons-material/Menu";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router";
import { IconButton } from "@mui/material";
import themeContex from "../../../../contex/themeContex";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type Anchor = "top" | "left" | "bottom" | "right";

export default function MenuDrower() {
  const themeCtx = React.useContext(themeContex);

  const darkTheme = createTheme({
    palette: {
      mode: themeCtx?.theme ? themeCtx?.theme : "light",
    },
  });

  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const menuOptions = [
    {
      text: "Search",
      link: "/search",
      icon: <ScreenSearchDesktopOutlinedIcon />,
    },
    // { text: "Playlists", link: "/playlists", icon: <MusicVideoIcon /> },
    // { text: "Favorites", link: "/favorites", icon: "" },
    { text: "About", link: "/about", icon: <HelpCenterOutlinedIcon /> },
  ];

  const list = (anchor: Anchor) => (
    // <div className="testDiv" >
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      height="100%"
      // sx={{ backgroundColor: "black", color: "red" }}
      // color={themeCtx?.theme === "dark" ? "var(--text-primary)" : ""}
      // style={{ color: "var(--text-primary)" }}
    >
      <List style={{ marginTop: "4vh", marginLeft: "2vh" }}>
        {menuOptions.map(({ text, link, icon }, index) => (
          <ListItem key={text} disablePadding onClick={() => navigate(link)}>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "3vh" }}
                primary={text}
                // sx={{ justifyContent: "center" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    // </div>
  );
  const anchor = "left";
  return (
    // <div className="testDiv">
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            onClick={toggleDrawer(anchor, true)}
            sx={{
              marginLeft: 1,
              //  justifyContent: "left", alignItems: "left"
            }}
          >
            {/* <MenuIcon
            fontSize="large"
            sx={{ backgroundColor: "var(--icon-backgraoung-color-primary)" }}
          /> */}

            <MenuIcon
              fontSize="large"
              sx={{ color: themeCtx?.theme === "dark" ? "white" : "" }}
            />

            {/* </Button> */}
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {/* <div className="testDiv"> */}
            {list(anchor)}
            {/* </div> */}
          </SwipeableDrawer>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

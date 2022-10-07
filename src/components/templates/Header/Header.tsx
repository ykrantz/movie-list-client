import MenuDrower from "../../UI/atoms/MenuDrower/MenuDrower";
import TemporaryDrawer from "../../UI/atoms/TemporaryDrawer/TemporaryDrawer";
// import MenuDrower from "../../UI/atoms/MenuDrower/
import { Grid, Typography, Button } from "@mui/material";
import { useContext } from "react";

import "./Header.css";
import themeContex from "../../../contex/themeContex";
import DarkModeSwitch from "../../UI/atoms/DarkModeSwitch/DarkModeSwitch";
const Header = (): JSX.Element => {
  const themeCtx = useContext(themeContex);
  return (
    <div>
      {/* <TemporaryDrawer /> */}
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2} lg={1}>
          <MenuDrower />
        </Grid>
        <Grid item xs={6} sm={6} lg={7}>
          {/* <Typography variant={{ xs: "h4", sm: "h1" }} gutterBottom>
            The Movie DataBase
          </Typography> */}
          <h1 className="Header-title">The Movie DataBase</h1>
        </Grid>
        <Grid>
          <Grid item xs={1} sm={1} lg={1}>
            <DarkModeSwitch
              onClickFunc={
                themeCtx?.switchTheme ? themeCtx.switchTheme : () => {}
              }
            />
          </Grid>

          {/* <Button onClick={themeCtx?.switchTheme} sx={{ marginTop: "2vh" }}>
            Switch to {themeCtx?.theme === "light" ? "dark" : "light"}
          </Button> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

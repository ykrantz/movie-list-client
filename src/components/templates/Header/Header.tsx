import MenuDrower from "../../UI/atoms/MenuDrower/MenuDrower";
import TemporaryDrawer from "../../UI/atoms/TemporaryDrawer/TemporaryDrawer";
import { Grid, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import themeContex from "../../../contex/themeContex";
import DarkModeSwitch from "../../UI/atoms/DarkModeSwitch/DarkModeSwitch";
const Header = (): JSX.Element => {
  const themeCtx = useContext(themeContex);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2} lg={1}>
          <MenuDrower />
        </Grid>
        <Grid item xs={8} sm={8} lg={9}>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <h1 className="Header-title">The Movie DataBase</h1>
          </Link>
        </Grid>
        <Grid>
          <Grid item xs={1} sm={1} lg={1}>
            <DarkModeSwitch
              onClickFunc={
                themeCtx?.switchTheme ? themeCtx.switchTheme : () => {}
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

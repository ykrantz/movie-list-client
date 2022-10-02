import MenuDrower from "../../UI/atoms/MenuDrower/MenuDrower";
import TemporaryDrawer from "../../UI/atoms/TemporaryDrawer/TemporaryDrawer";
// import MenuDrower from "../../UI/atoms/MenuDrower/
import { Grid, Typography } from "@mui/material";

import "./Header.css";
const Header = (): JSX.Element => {
  return (
    <div>
      {/* <TemporaryDrawer /> */}
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2} lg={1}>
          <MenuDrower />
        </Grid>
        <Grid item xs={8} sm={8} lg={10}>
          {/* <Typography variant={{ xs: "h4", sm: "h1" }} gutterBottom>
            The Movie DataBase
          </Typography> */}
          <h1 className="Header-title">The Movie DataBase</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import CircularIndeterminate from "../CircularIndeterminate/CircularIndeterminate";
import CardMediaVideo from "./CardMediaVideo/CardMediaVideo";
import "./MovieCard.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import themeContex from "../../../../contex/themeContex";

type appProps = {
  title?: string;
  img?: string;
  year?: string;
};

export default function MovieCard({ title, img, year }: appProps) {
  const themeCtx = React.useContext(themeContex);

  const darkTheme = createTheme({
    palette: {
      mode: themeCtx?.theme ? themeCtx?.theme : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid item xs={12} sm={6} lg={4}>
        <Card
          sx={{
            hight: 150,
            // backgroundColor: "var(--background-secondary)",
            padding: "1vh",
          }}
        >
          <CardActionArea>
            <React.Suspense fallback={<CircularIndeterminate />}>
              <CardMediaVideo image={img} alt={title} />
            </React.Suspense>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  height:
                    "3em" /* height is 2x line-height, so two lines will display */,
                  overflow: "hidden",
                  // color: "var(--text-primary)",
                }}
              >
                {title}
                {year && `(${year})`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}

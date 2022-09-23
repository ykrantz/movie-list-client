import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import CircularIndeterminate from "../CircularIndeterminate/CircularIndeterminate";
// import CardMediaVideo from "./CardMediaVideo/CardMediaVideo";
// import { Button, CardActionArea, CardActions } from "@mui/material";

type appProps = {
  title?: string;
  img?: string;
  year?: string;
};

// const CardMedia = React.lazy(() => import("@mui/material/CardMedia"));
const CardMediaVideo = React.lazy(
  () => import("./CardMediaVideo/CardMediaVideo")
);

export default function MovieCard({ title, img, year }: appProps) {
  return (
    // <div className="MovieCard-Container">
    <Grid item xs={12} sm={6} lg={4}>
      {/* <Card sx={{ margin: "1%", padding: "20px", marginTop: 3, flex: "20%" }}> */}
      <Card sx={{ hight: 150 }}>
        <CardActionArea>
          <React.Suspense fallback={<CircularIndeterminate />}>
            <CardMediaVideo image={img} alt={title} />
            {/* <CardMedia
              component="img"
              height="200 "
              image={img}
              alt={title}
              sx={{ objectFit: "contain" }}
            /> */}
          </React.Suspense>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title} {year && `(${year})`}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
}

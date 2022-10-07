import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import CircularIndeterminate from "../CircularIndeterminate/CircularIndeterminate";
import CardMediaVideo from "./CardMediaVideo/CardMediaVideo";
import ImgTest from "../archeive/ImgTest";
import "./MovieCard.css";
// import { Button, CardActionArea, CardActions } from "@mui/material";

type appProps = {
  title?: string;
  img?: string;
  year?: string;
};

export default function MovieCard({ title, img, year }: appProps) {
  return (
    // <div className="MovieCard-Container">
    <Grid item xs={12} sm={6} lg={4}>
      {/* <Card sx={{ margin: "1%", padding: "20px", marginTop: 3, flex: "20%" }}> */}
      <Card
        sx={{
          hight: 150,
          backgroundColor: "var(--background-secondary)",
          padding: "1vh",
        }}
      >
        <CardActionArea>
          <React.Suspense fallback={<CircularIndeterminate />}>
            <CardMediaVideo image={img} alt={title} />
            {/* <ImgTest />  */}
            {/* <CardMedia
              component="img"
              height="200 "
              image={img}
              alt={title}
              sx={{ objectFit: "contain" }}
            /> */}
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
                color: "var(--text-primary)",
              }}
            >
              {/* <div className="MovieCard-movietitleAndYear"> */}
              {title}
              {year && `(${year})`}
              {/* </div> */}
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

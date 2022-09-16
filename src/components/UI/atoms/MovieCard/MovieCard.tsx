import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import { Button, CardActionArea, CardActions } from "@mui/material";

type appProps = {
  title?: string;
  img?: string;
  year?: string;
};

export default function MovieCard({ title, img, year }: appProps) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 3 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={title} />
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
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

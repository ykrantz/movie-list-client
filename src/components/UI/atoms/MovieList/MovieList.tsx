import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import MovieItem from "../MovieItem/MovieItem";
import { movieListType } from "../../../../types/types";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import { Grid } from "@mui/material";

// type movieItemType = {
//   id?: string;
//   titleText?: { text?: string };
//   primaryImage?: { url?: string };
//   releaseYear?: { year?: string };
// };

type appProps = {
  moviesList: movieListType;
};

const MovieList = ({ moviesList }: appProps): JSX.Element => {
  // console.log({ moviesList }, 15);

  return (
    <div className="MovieList-container">
      {/* <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List> */}
      <Grid container spacing={2}>
        {moviesList.length > 1 &&
          moviesList.map((movie) => (
            <MovieCard
              key={movie?.id}
              title={movie?.titleText?.text}
              img={movie?.primaryImage?.url}
              year={movie?.releaseYear?.year}
            />
            // <MovieItem
            //   key={movie?.id}
            //   title={movie?.titleText?.text}
            //   img={movie?.primaryImage?.url}
            //   year={movie?.releaseYear?.year}
            // />
          ))}
        {/* </List>
        </nav>
      </Box> */}
      </Grid>
    </div>
  );
};

export default MovieList;

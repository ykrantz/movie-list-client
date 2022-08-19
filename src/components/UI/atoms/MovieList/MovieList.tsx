import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import MovieItem from "../MovieItem/MovieItem";

type movieItemApi = {
  id?: string;
  titleText?: { text?: string };
  primaryImage?: { url?: string };
  releaseYear?: { year?: string };
};

type appProps = {
  moviesList: Array<movieItemApi>;
};

const MovieList = ({ moviesList }: appProps): JSX.Element => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {moviesList.map((movie) => (
            <MovieItem
              key={movie?.id}
              title={movie?.titleText?.text}
              img={movie?.primaryImage?.url}
              year={movie?.releaseYear?.year}
            />
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default MovieList;

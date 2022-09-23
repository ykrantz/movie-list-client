import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useParams } from "react-router-dom";

import MovieItem from "../archeive/MovieItem/MovieItem";
import { movieListType } from "../../../../types/types";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import { Grid } from "@mui/material";
import { MAX_ITEM_IN_PAGE } from "../../../../utils/mainVariables";

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
  console.log(36);

  const { page } = useParams();
  // const page = 2;
  console.log({ page }, 32);

  const getCurrentMovieList = React.useCallback((): movieListType => {
    const pageNum: number = Number(page) ? Number(page) : 1;
    const itemStartNum: number = (pageNum - 1) * MAX_ITEM_IN_PAGE;
    const itemEndNum: number = pageNum * MAX_ITEM_IN_PAGE;
    const tempMovieList = moviesList.slice(itemStartNum, itemEndNum);
    console.log({ tempMovieList }, 31, { itemStartNum }, { itemEndNum });

    return tempMovieList;
  }, [moviesList, page]);

  const [currentMovieList, setCurrentMovieList] = React.useState(
    moviesList.length > 1 ? getCurrentMovieList() : []
  );
  React.useEffect(() => {
    setCurrentMovieList(moviesList.length > 1 ? getCurrentMovieList() : []);
  }, [moviesList, page]);
  console.log(38, { currentMovieList });
  return (
    <div className="MovieList-container">
      {/* <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List> */}
      {/* <Box sx={{ width: "80%", justifyContent: "center", textAlign: "center" }}> */}
      <Grid container spacing={2}>
        {/* {moviesList.length > 1 &&
          moviesList.map((movie) => ( */}

        {currentMovieList.length > 0 &&
          currentMovieList.map((movie) => (
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
      {/* </Box> */}
    </div>
  );
};

export default MovieList;

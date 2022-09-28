import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useNavigate, useParams } from "react-router-dom";

import MovieItem from "../archeive/MovieItem/MovieItem";
import { movieListType } from "../../../../types/types";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import { Grid } from "@mui/material";
import { MAX_ITEM_IN_PAGE } from "../../../../utils/mainVariables";
import moviesContex from "../../../../contex/moviesContex";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import filterMovieList from "../../../../actions/filterMovieList";

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
  // console.log(36);
  //
  const { page, text } = useParams();
  // const page = 2;

  const navigate = useNavigate();
  // console.log({ page }, 32);

  const moviesCtx = React.useContext(moviesContex);
  const getCurrentMovieList = React.useCallback((): movieListType => {
    const pageNum: number = Number(page) ? Number(page) : 1;
    const itemStartNum: number = (pageNum - 1) * MAX_ITEM_IN_PAGE;
    const itemEndNum: number = pageNum * MAX_ITEM_IN_PAGE;
    const tempMovieList = moviesList.slice(itemStartNum, itemEndNum);
    // console.log({ tempMovieList }, 31, { itemStartNum }, { itemEndNum });

    return tempMovieList;
  }, [moviesList, page]);

  // const [currentMovieList, setCurrentMovieList] = React.useState(
  //   moviesList.length > 1 ? getCurrentMovieList() : []
  // );

  const [currentMovieList, setCurrentMovieList] = React.useState(
    moviesList.length > 1 ? getCurrentMovieList() : []
  );

  React.useEffect(() => {
    setCurrentMovieList(moviesList.length > 1 ? getCurrentMovieList() : []);
  }, [moviesList, page]);

  // const refreshMovieList = async () => {
  //   console.log("seraching refresh");
  //   // if was an update from server so ther is no e=results. if not it means that was an refresh of page and then need to get the results again

  //   const moviesListResults: any = await searchMovieFromApi(text);
  //   moviesCtx?.handleIsUpdateFromServer(true);

  //   if (moviesListResults) {
  //     const filteredMovieList: movieListType = filterMovieList(
  //       moviesListResults?.results
  //     );
  //     moviesCtx?.handleMovieList(filteredMovieList);
  //   }

  //   // navigate(`/movie-page-results/${moviesCtx?.inputText}/${page}`);
  //   // console.log(moviesCtx?.movieList, 11);
  // };

  // React.useEffect(() => {
  //   // if page was refreshed
  //   console.log(moviesCtx?.isUpdateFromServer, 42);

  //   if (!moviesCtx?.isUpdateFromServer) {
  //     refreshMovieList();
  //     setCurrentMovieList(moviesList.length > 1 ? getCurrentMovieList() : []);
  //   }
  // }, []);
  // console.log(38, { currentMovieList });

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

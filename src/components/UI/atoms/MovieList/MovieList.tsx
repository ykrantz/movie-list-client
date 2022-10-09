import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

import { movieListType } from "../../../../types/types";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import { Grid } from "@mui/material";
import { MAX_ITEM_IN_PAGE } from "../../../../utils/mainVariables";
import moviesContex from "../../../../contex/moviesContex";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import filterMovieList from "../../../../actions/filterMovieList";

type appProps = {
  moviesList: movieListType;
};

const MovieList = ({ moviesList }: appProps): JSX.Element => {
  const { page, text } = useParams();
  const movieCtx = useContext(moviesContex);

  const navigate = useNavigate();

  const moviesCtx = React.useContext(moviesContex);
  const getCurrentMovieList = React.useCallback((): movieListType => {
    const pageNum: number = Number(page) ? Number(page) : 1;
    const itemStartNum: number = (pageNum - 1) * MAX_ITEM_IN_PAGE;
    const itemEndNum: number = pageNum * MAX_ITEM_IN_PAGE;
    const tempMovieList = moviesList.slice(itemStartNum, itemEndNum);

    return tempMovieList;
  }, [moviesList, page]);

  const [currentMovieList, setCurrentMovieList] = React.useState(
    moviesList.length > 1 ? getCurrentMovieList() : []
  );

  React.useEffect(() => {
    setCurrentMovieList(moviesList.length > 1 ? getCurrentMovieList() : []);
  }, [moviesList, page]);

  return (
    <div className="MovieList-container">
      <Grid container spacing={2}>
        {currentMovieList.length > 0 &&
          currentMovieList.map((movie) => (
            <MovieCard
              key={movie?.id}
              title={movie?.titleText?.text}
              img={movie?.primaryImage?.url}
              year={movie?.releaseYear?.year}
            />
          ))}
      </Grid>
    </div>
  );
};

export default MovieList;

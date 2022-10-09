import { useContext } from "react";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import moviesContex from "../../../../contex/moviesContex";
import CircularIndeterminate from "../../atoms/CircularIndeterminate/CircularIndeterminate";
import MovieList from "../../atoms/MovieList/MovieList";
import { MAX_ITEM_IN_PAGE } from "../../../../utils/mainVariables";
import MoviePageLink from "../../atoms/MoviePageLink/MoviePageLink";
import "./MovieListResults.css";

const MovieListResults = (): JSX.Element => {
  const movieCtx = useContext(moviesContex);

  const numberOfPages: number = Math.ceil(
    Number(movieCtx?.movieList.length) / MAX_ITEM_IN_PAGE
  );

  return (
    <div className="MovieListResults-container">
      {movieCtx?.isLoading ? (
        <CircularIndeterminate />
      ) : movieCtx?.movieList.length ? (
        <>
          {numberOfPages > 1 && (
            <MoviePageLink
              numberOfPages={numberOfPages}
              pagesPath="/movie-page-results"
            />
          )}
          <MovieList moviesList={movieCtx?.movieList || []} />
        </>
      ) : movieCtx?.isUpdateFromServer ? (
        "Sorry. No movies was found"
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieListResults;

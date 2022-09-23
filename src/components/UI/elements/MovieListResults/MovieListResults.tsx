import { lazy, Suspense, useContext } from "react";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import moviesContex from "../../../../contex/moviesContex";
import CircularIndeterminate from "../../atoms/CircularIndeterminate/CircularIndeterminate";
// import MovieList from "../../atoms/MovieList/MovieList";

type movieItemType = {
  id?: string;
  titleText?: { text?: string };
  primaryImage?: { url?: string };
  releaseYear?: { year?: string };
};

type appProps = {
  moviesList: Array<movieItemType>;
};

const MovieList = lazy(() => import("../../atoms/MovieList/MovieList"));
const MovieListResults = (): JSX.Element => {
  const movieCtx = useContext(moviesContex);
  // console.log(35, movieCtx?.movieList);

  return (
    <div className="MovieListResults-container">
      {movieCtx?.movieList.length ? (
        <Suspense fallback={<CircularIndeterminate />}>
          <MovieList moviesList={movieCtx?.movieList || []} />
        </Suspense>
      ) : movieCtx?.isUpdateFromServer ? (
        "Sorry. No movies was found"
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieListResults;

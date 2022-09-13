import { useContext } from "react";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import moviesContex from "../../../../contex/moviesContex";
import MovieList from "../../atoms/MovieList/MovieList";

type movieItemType = {
  id?: string;
  titleText?: { text?: string };
  primaryImage?: { url?: string };
  releaseYear?: { year?: string };
};

type appProps = {
  moviesList: Array<movieItemType>;
};

const MovieListResults = (): JSX.Element => {
  const movieCtx = useContext(moviesContex);
  return (
    <div>
      <MovieList moviesList={movieCtx?.movieList || []} />
    </div>
  );
};

export default MovieListResults;

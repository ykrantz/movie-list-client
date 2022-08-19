import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import MovieList from "../../atoms/MovieList/MovieList";

type movieItemApi = {
  id?: string;
  titleText?: { text?: string };
  primaryImage?: { url?: string };
  releaseYear?: { year?: string };
};

type appProps = {
  moviesList: Array<movieItemApi>;
};

const MovieListResults = ({ moviesList }: appProps): JSX.Element => {
  return (
    <div>
      <MovieList moviesList={moviesList} />
    </div>
  );
};

export default MovieListResults;

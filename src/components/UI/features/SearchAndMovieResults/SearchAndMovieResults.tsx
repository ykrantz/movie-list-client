import { useState } from "react";
import MovieListResults from "../../elements/MovieListResults/MovieListResults";
import SearchMovie from "../../elements/SearchMovie/SearchMovie";

type movieItemApi = {
  id?: string;
  titleText?: { text?: string };
  primaryImage?: { url?: string };
  releaseYear?: { year?: string };
};
type MovieList = Array<movieItemApi>;
// type appProps = {
//   movieList: Array<movieItemApi>;
// };

const SearchAndMovieResults = (): JSX.Element => {
  // const [moviesList, setMovieList] = useState([{}]);
  const [moviesList, setMovieList] = useState<MovieList>({} as MovieList);

  // const handleMovieList = (list: Array<movieItemApi>): void => {
  //   setMovieList(list);
  // };
  const handleMovieList = (list: MovieList | [{}]): void => {
    setMovieList(list);
  };

  return (
    <div>
      <SearchMovie handleMovieList={handleMovieList:(list: MovieList | [{}):void=>void} />
      <MovieListResults moviesList={moviesList} />
    </div>
  );
};

export default SearchAndMovieResults;

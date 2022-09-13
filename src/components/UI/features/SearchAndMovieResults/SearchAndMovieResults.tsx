import { useState } from "react";
import { movieListType } from "../../../../types/types";
import MovieListResults from "../../elements/MovieListResults/MovieListResults";
import SearchMovie from "../../elements/SearchMovie/SearchMovie";

// type movieItemType = {
//   id?: string;
//   titleText?: { text?: string };
//   primaryImage?: { url?: string };
//   releaseYear?: { year?: string };
// };
// type MovieList = Array<movieItemType>;
// type appProps = {
//   movieList: Array<movieItemType>;
// };

const SearchAndMovieResults = (): JSX.Element => {
  // const [moviesList, setMovieList] = useState([{}]);
  // const [moviesList, setMovieList] = useState<movieListType>(
  //   {} as movieListType
  // );

  // const handleMovieList = (list: Array<movieItemType>): void => {
  //   setMovieList(list);
  // };
  // const handleMovieList = (list: movieListType | [{}]): void => {
  //   setMovieList(list);
  // };

  return (
    <div>
      {/* <SearchMovie handleMovieList={handleMovieList:(list: MovieList | [{}):void=>void} /> */}
      <SearchMovie />
      {/* <MovieListResults moviesList={moviesList} /> */}
      <MovieListResults />
    </div>
  );
};

export default SearchAndMovieResults;

import { lazy, Suspense, useContext, useState } from "react";
import moviesContex from "../../../../contex/moviesContex";
import { movieListType } from "../../../../types/types";
import { MAX_ITEM_IN_PAGE } from "../../../../utils/mainVariables";
import CircularIndeterminate from "../../atoms/CircularIndeterminate/CircularIndeterminate";
import MoviePageLink from "../../atoms/MoviePageLink/MoviePageLink";
import PaginationLink from "../../atoms/archeive/PaginationLink/PaginationLink";
import MovieListResults from "../../elements/MovieListResults/MovieListResults";
import SearchMovie from "../../elements/SearchMovie/SearchMovie";
import "./SearchAndMovieResults.css";
import themeContex from "../../../../contex/themeContex";
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
type appProps = {
  pageNum?: number;
};
// const MovieListResults = lazy(
//   () => import("../../elements/MovieListResults/MovieListResults")
// );
const SearchAndMovieResults = ({ pageNum }: appProps): JSX.Element => {
  // const [moviesList, setMovieList] = useState([{}]);
  // const [moviesList, setMovieList] = useState<movieListType>(
  //   {} as movieListType
  // );

  const moviesCtx = useContext(moviesContex);
  const themeCtx = useContext(themeContex);
  // const handleMovieList = (list: Array<movieItemType>): void => {
  //   setMovieList(list);
  // };
  // const handleMovieList = (list: movieListType | [{}]): void => {
  //   setMovieList(list);
  // };
  // const numberOfPages: number = Math.ceil(
  //   Number(moviesCtx?.movieList.length) / MAX_ITEM_IN_PAGE
  // );

  return (
    <div data-theme={themeCtx?.theme ? themeCtx?.theme : ""}>
      {/* <PaginationLink /> */}
      {/* <SearchMovie handleMovieList={handleMovieList:(list: MovieList | [{}):void=>void} /> */}
      <p className="text2p">test2</p>
      <SearchMovie />
      {/* {numberOfPages > 1 && (
        <MoviePageLink
          numberOfPages={numberOfPages}
          pagesPath="/movie-page-results"
        />
      )} */}
      {/* <MovieListResults moviesList={moviesList} /> */}
      {/* <Suspense fallback={<CircularIndeterminate />}> */}
      <MovieListResults />
      {/* </Suspense> */}
    </div>
  );
};

export default SearchAndMovieResults;

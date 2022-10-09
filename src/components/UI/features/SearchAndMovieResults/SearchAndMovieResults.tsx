import { lazy, Suspense, useContext, useEffect, useState } from "react";
import moviesContex from "../../../../contex/moviesContex";
import { movieListType } from "../../../../types/types";
import {
  DEFULT_MOVIE_IN_HOME_PAGE,
  MAX_ITEM_IN_PAGE,
} from "../../../../utils/mainVariables";
import CircularIndeterminate from "../../atoms/CircularIndeterminate/CircularIndeterminate";
import MoviePageLink from "../../atoms/MoviePageLink/MoviePageLink";
import PaginationLink from "../../atoms/archeive/PaginationLink/PaginationLink";
import MovieListResults from "../../elements/MovieListResults/MovieListResults";
import SearchMovie from "../../elements/SearchMovie/SearchMovie";
import "./SearchAndMovieResults.css";
import themeContex from "../../../../contex/themeContex";
import filterMovieList from "../../../../actions/filterMovieList";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import messageContex from "../../../../contex/messageContex";
import { useNavigate } from "react-router";
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
// type appProps = {
//   pageNum?: number;
// };
// const MovieListResults = lazy(
//   () => import("../../elements/MovieListResults/MovieListResults")
// );
const SearchAndMovieResults = (): // { pageNum }: appProps
JSX.Element => {
  // const [moviesList, setMovieList] = useState([{}]);
  // const [moviesList, setMovieList] = useState<movieListType>(
  //   {} as movieListType
  // );

  const moviesCtx = useContext(moviesContex);
  const themeCtx = useContext(themeContex);
  const messageCtx = useContext(messageContex);

  const navigate = useNavigate();

  useEffect(() => {
    if (moviesCtx?.movieList?.length === 0) {
      searchMovies(DEFULT_MOVIE_IN_HOME_PAGE);
    }
  }, []);
  // const handleMovieList = (list: Array<movieItemType>): void => {
  //   setMovieList(list);
  // };
  // const handleMovieList = (list: movieListType | [{}]): void => {
  //   setMovieList(list);
  // };
  // const numberOfPages: number = Math.ceil(
  //   Number(moviesCtx?.movieList.length) / MAX_ITEM_IN_PAGE
  // );

  const searchMovies = async (textSearch: string) => {
    try {
      console.log("seraching", moviesCtx?.inputText);
      if (!textSearch) throw "no text to search";
      // const moviesListResults: movieListType | [{}] =
      // const moviesListResults: movieListType = await searchMovieFromApi(
      if (moviesCtx?.currentSearch === textSearch) {
        // console.log("Already searched");
        messageCtx?.changeMessage("Already searched", "error");
        throw "Already searched";
      }
      moviesCtx?.handleIsLoading(true);

      moviesCtx?.handleSetCurrentSearch(textSearch);

      const moviesListResults: any = await searchMovieFromApi(textSearch);

      moviesCtx?.handleIsLoading(false);
      if (moviesListResults) {
        moviesCtx?.handleIsUpdateFromServer(true);
        const filteredMovieList = filterMovieList(moviesListResults?.results);

        moviesCtx?.handleMovieList(filteredMovieList);
        // navigate(`/movie-page-results/${moviesCtx?.inputText}/1`);
        return true;
      } else {
        console.log("no answer from server");
        moviesCtx?.handleMovieList([]);
        messageCtx?.changeMessage("no answer from server", "error");
        return false;
      }
    } catch (e) {
      console.log("error:", e);
      return false;
    }
  };

  return (
    // <div data-theme={themeCtx?.theme ? themeCtx?.theme : ""}>
    <div className="SearchAndMovieResults-container">
      {/* <PaginationLink /> */}
      {/* <SearchMovie handleMovieList={handleMovieList:(list: MovieList | [{}):void=>void} /> */}
      {/* <div style={{ backgroundColor: "var(--text-primary)" }}>test4</div> */}
      <SearchMovie searchMoviesFunc={searchMovies} />
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

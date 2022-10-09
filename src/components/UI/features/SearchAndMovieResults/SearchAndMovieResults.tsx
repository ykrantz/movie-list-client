import { lazy, Suspense, useContext, useEffect, useState } from "react";
import moviesContex from "../../../../contex/moviesContex";
import { movieListType } from "../../../../types/types";
import {
  DEFULT_MOVIE_IN_HOME_PAGE,
  MAX_ITEM_IN_PAGE,
} from "../../../../utils/mainVariables";
import CircularIndeterminate from "../../atoms/CircularIndeterminate/CircularIndeterminate";
import MoviePageLink from "../../atoms/MoviePageLink/MoviePageLink";
import MovieListResults from "../../elements/MovieListResults/MovieListResults";
import SearchMovie from "../../elements/SearchMovie/SearchMovie";
import "./SearchAndMovieResults.css";
import themeContex from "../../../../contex/themeContex";
import filterMovieList from "../../../../actions/filterMovieList";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import messageContex from "../../../../contex/messageContex";
import { useNavigate } from "react-router";
const SearchAndMovieResults = (): // { pageNum }: appProps
JSX.Element => {
  const moviesCtx = useContext(moviesContex);
  const themeCtx = useContext(themeContex);
  const messageCtx = useContext(messageContex);

  const navigate = useNavigate();

  useEffect(() => {
    if (moviesCtx?.movieList?.length === 0) {
      searchMovies(DEFULT_MOVIE_IN_HOME_PAGE);
    }
  }, []);

  const searchMovies = async (textSearch: string) => {
    try {
      console.log("seraching", moviesCtx?.inputText);
      if (!textSearch) throw "no text to search";

      if (moviesCtx?.currentSearch === textSearch) {
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
    <div className="SearchAndMovieResults-container">
      <SearchMovie searchMoviesFunc={searchMovies} />

      <MovieListResults />
    </div>
  );
};

export default SearchAndMovieResults;

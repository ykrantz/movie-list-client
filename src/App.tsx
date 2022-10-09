import React, { lazy, Suspense, useState } from "react";
import "./App.css";

import MoviesContex from "./contex/moviesContex";
import { alertType, messageType, movieListType } from "./types/types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircularIndeterminate from "./components/UI/atoms/CircularIndeterminate/CircularIndeterminate";
import AboutMePage from "./components/pages/AboutMePage/AboutMePage";
import MessageContex from "./contex/messageContex";
import ThemeContex from "./contex/themeContex";
import { INITIAL_MOVIE_LIST } from "./utils/mainVariables";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
// require("dotenv").config();
// import express from "express";
// import { useColorScheme } from "@mui/material/styles";

const MovieResultsPage = lazy(
  () => import("./components/pages/MovieResultsPage/MovieResultsPage")
);
const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));

const initialMovieList: movieListType = INITIAL_MOVIE_LIST;

function App() {
  // const { mode, setMode } = useColorScheme();
  // dotenv.config();

  const [movieList, setMovieList] = useState(
    localStorage.movieList
      ? JSON.parse(localStorage.movieList)
      : initialMovieList
  );
  // const [inputText, setInputText] = useState(
  //   localStorage.searchText ? JSON.parse(localStorage.searchText) : ""
  // );
  const [inputText, setInputText] = useState("");
  const [isUpdateFromServer, setIsUpdateFromServer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<messageType | null>(null);
  const [theme, setTheme] = useState(
    localStorage?.theme ? JSON.parse(localStorage?.theme) : "light"
  );
  const [currentSearch, setCurrentSearch] = useState("");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.theme = JSON.stringify(newTheme);
    setTheme(newTheme);

    // setMode(mode === "dark" ? "light" : "dark");
  };

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };
  const handleMovieList = (movieList: movieListType) => {
    localStorage.movieList = JSON.stringify(movieList);
    localStorage.searchText = JSON.stringify(inputText);

    setMovieList(movieList);
  };

  const handleSetCurrentSearch = (SearchText: string) => {
    setCurrentSearch(SearchText);
  };

  const handleInputText = (text: string) => {
    setInputText(text);
  };

  const handleIsUpdateFromServer = (isUpdate: boolean) => {
    setIsUpdateFromServer(isUpdate);
  };

  const changeMessage = (str: string, type: alertType = "success"): void => {
    console.log({ str }, 53);

    setMessage({ messageStr: str, alertKind: type });
    console.log({ message }, 54);

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  const waitingMessage = () => {
    changeMessage("Waiting for results from server", "info");
  };

  return (
    <div className="App" data-theme={theme}>
      <MoviesContex.Provider
        value={{
          movieList,
          handleMovieList,
          inputText,
          handleInputText,
          isUpdateFromServer,
          handleIsUpdateFromServer,
          isLoading,
          handleIsLoading,
          currentSearch,
          handleSetCurrentSearch,
        }}
      >
        <MessageContex.Provider
          value={{ message, changeMessage, waitingMessage }}
        >
          <ThemeContex.Provider value={{ theme, switchTheme }}>
            <Suspense fallback={<CircularIndeterminate />}>
              <Router>
                <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/search" element={<HomePage />}></Route>
                  <Route
                    path="/movie-page-results/:text/:page"
                    element={<MovieResultsPage />}
                  ></Route>
                  <Route path="/about" element={<AboutMePage />}></Route>
                </Routes>
              </Router>
            </Suspense>
          </ThemeContex.Provider>
        </MessageContex.Provider>
      </MoviesContex.Provider>
    </div>
  );
}

export default App;

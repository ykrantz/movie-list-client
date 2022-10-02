import React, { lazy, Suspense, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import HomePage from "./components/pages/HomePage/HomePage";
import handleMoviesContex from "./contex/moviesContex";
import MoviesContex from "./contex/moviesContex";
import { alertType, messageType, movieListType } from "./types/types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MovieResultsPage from "./components/pages/MovieResultsPage/MovieResultsPage";
import { Grid } from "@mui/material";
import CircularIndeterminate from "./components/UI/atoms/CircularIndeterminate/CircularIndeterminate";
import MessageContex from "./contex/messageContex";

const MovieResultsPage = lazy(
  () => import("./components/pages/MovieResultsPage/MovieResultsPage")
);
const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));

function App() {
  // const moviesContex: MoviesContextInterface = {
  //   name: "Using React Context in a Typescript App",
  //   author: "thehappybug",
  //   url: "http://www.example.com",
  // };
  const initialMovieList: movieListType = [];
  // localStorage.s = 1;
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

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };
  const handleMovieList = (movieList: movieListType) => {
    // console.log({  movieList }, 13);

    localStorage.movieList = JSON.stringify(movieList);
    localStorage.searchText = JSON.stringify(inputText);

    // localStorage.movieList("1");
    setMovieList(movieList);
  };

  const handleInputText = (text: string) => {
    setInputText(text);
  };

  const handleIsUpdateFromServer = (isUpdate: boolean) => {
    setIsUpdateFromServer(isUpdate);
  };

  const changeMessage = (str: string, type: alertType = "success"): void => {
    setMessage({ messageStr: str, alertKind: type });

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  const waitingMessage = () => {
    changeMessage("Waiting for results from server", "info");
  };

  return (
    <div className="App">
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
        }}
      >
        <MessageContex.Provider
          value={{ message, changeMessage, waitingMessage }}
        >
          <Suspense fallback={<CircularIndeterminate />}>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                  path="/movie-page-results/:text/:page"
                  element={<MovieResultsPage />}
                ></Route>
              </Routes>
            </Router>
          </Suspense>
        </MessageContex.Provider>
      </MoviesContex.Provider>
    </div>
  );
}

export default App;

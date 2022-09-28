import React, { lazy, Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import HomePage from "./components/pages/HomePage/HomePage";
import handleMoviesContex from "./contex/moviesContex";
import MoviesContex from "./contex/moviesContex";
import { movieListType } from "./types/types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MovieResultsPage from "./components/pages/MovieResultsPage/MovieResultsPage";
import { Grid } from "@mui/material";
import CircularIndeterminate from "./components/UI/atoms/CircularIndeterminate/CircularIndeterminate";

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
  localStorage.s = 1;
  const [movieList, setMovieList] = useState(
    localStorage.movieList
      ? JSON.parse(localStorage.movieList)
      : initialMovieList
  );
  const [inputText, setInputText] = useState(
    localStorage.searchText ? JSON.parse(localStorage.searchText) : ""
  );
  const [isUpdateFromServer, setIsUpdateFromServer] = useState(false);

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
        }}
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
      </MoviesContex.Provider>
    </div>
  );
}

export default App;

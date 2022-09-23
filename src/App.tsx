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

  const [movieList, setMovieList] = useState(initialMovieList);
  const [inputText, setInputText] = useState("");
  const [isUpdateFromServer, setIsUpdateFromServer] = useState(false);
  console.log({ movieList }, 37);

  const handleMovieList = (movieList: movieListType) => {
    // console.log({ movieList }, 13);

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
                path="/movie-page-results/:page"
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

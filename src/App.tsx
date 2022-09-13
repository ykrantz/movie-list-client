import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import handleMoviesContex from "./contex/moviesContex";
import MoviesContex from "./contex/moviesContex";
import { movieListType } from "./types/types";

function App() {
  // const moviesContex: MoviesContextInterface = {
  //   name: "Using React Context in a Typescript App",
  //   author: "thehappybug",
  //   url: "http://www.example.com",
  // };
  const initialMovieList: movieListType = [];

  const [movieList, setMovieList] = useState(initialMovieList);
  const [inputText, setInputText] = useState("");

  const handleMovieList = (movieList: movieListType) => {
    // console.log({ movieList }, 13);

    setMovieList(movieList);
  };
  const handleInputText = (text: string) => {
    setInputText(text);
  };

  return (
    <div className="App">
      <MoviesContex.Provider
        value={{ movieList, handleMovieList, inputText, handleInputText }}
      >
        <HomePage />
      </MoviesContex.Provider>
    </div>
  );
}

export default App;

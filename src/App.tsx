import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import handleMoviesContex from "./contex/handleMoviesContex";

function App() {
  // const moviesContex: MoviesContextInterface = {
  //   name: "Using React Context in a Typescript App",
  //   author: "thehappybug",
  //   url: "http://www.example.com",
  // };

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

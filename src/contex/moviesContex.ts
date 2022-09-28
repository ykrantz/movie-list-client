import { type } from "os";
import { createContext } from "react";
import { movieListType } from "../types/types";

  
type MoviesContextType = {
  movieList: movieListType;
  handleMovieList:(movieList:movieListType)=>void;
  inputText:string,
  handleInputText:(inputText:string)=>void,
  isUpdateFromServer:boolean,
  handleIsUpdateFromServer:(isUpdated:boolean)=>void,
}

// const handleMoviesContex =createContext<MoviesContextInterface | null>(null);
export default createContext<MoviesContextType|null>(null)
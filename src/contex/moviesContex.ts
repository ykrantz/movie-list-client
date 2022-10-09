import { createContext } from "react";
import { alertType, messageType, movieListType } from "../types/types";

  
type MoviesContextType = {
  movieList: movieListType;
  handleMovieList:(movieList:movieListType)=>void;
  inputText:string,
  handleInputText:(inputText:string)=>void,
  isUpdateFromServer:boolean,
  handleIsUpdateFromServer:(isUpdated:boolean)=>void,
  isLoading:boolean,
  handleIsLoading:(isUpdated:boolean)=>void,
  currentSearch:string,
  handleSetCurrentSearch:(SearchText: string)=>void

}



export default createContext<MoviesContextType|null>(null)
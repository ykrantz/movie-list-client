// import { type } from "os";
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
  // message:messageType,

  // changeMessage:(str: string, type: alertType )=> void,
  // waitingMessage:()=>void, 
}



// const handleMoviesContex =createContext<MoviesContextInterface | null>(null);
export default createContext<MoviesContextType|null>(null)
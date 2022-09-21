import { type } from "os";
import { createContext } from "react";
import { movieListType } from "../types/types";
// import { movieListType } from "../types/types";

// type movieItemType = {
//     id: string;
//     titleText: { text: string };
//     primaryImage: { url: string };
//     releaseYear: { year: string };
//   };
  
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
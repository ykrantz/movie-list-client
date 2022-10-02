// import { type } from "os";
import { createContext } from "react";
import { alertType, messageType, movieListType } from "../types/types";

  
type MessageContextType = {

  message:messageType,
  changeMessage:(str: string, type: alertType )=> void,
  waitingMessage:()=>void, 
}



// const handleMoviesContex =createContext<MoviesContextInterface | null>(null);
export default createContext<MessageContextType|null>(null)
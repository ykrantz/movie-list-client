// import { type } from "os";
import { createContext } from "react";
import { alertType, messageType } from "../types/types";

  
type ThemeContextType = {
    theme:"light"|"dark",
    switchTheme: ()=>void;

}



// const handleMoviesContex =createContext<MoviesContextInterface | null>(null);
export default createContext<ThemeContextType|null>(null)
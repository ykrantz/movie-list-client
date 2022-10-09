import { createContext } from "react";
import { alertType, messageType } from "../types/types";

  
type ThemeContextType = {
    theme:"light"|"dark",
    switchTheme: ()=>void;

}



export default createContext<ThemeContextType|null>(null)
import { createContext } from "react";
import { alertType, messageType } from "../types/types";

  
type MessageContextType = {

  message:messageType,
  changeMessage:(str: string, type: alertType )=> void,
  waitingMessage:()=>void, 
}



export default createContext<MessageContextType|null>(null)
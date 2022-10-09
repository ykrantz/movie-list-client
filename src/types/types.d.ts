import { type } from "os";

type movieItemType = {
    id?: string;
    titleText?: { text?: string };
    primaryImage?: { url?: string };
    releaseYear?: { year?: string };
  };

type movieListType= movieItemType[]

type alertType = "error" | "success" | "warning" | "info"
type messageType={messageStr:string | undefined,
      alertKind : alertType | undefined
  }| null

type handleSetMovieListType= (movieList:movieListType)=>void;
type handleSetString= (text:string)=>void;

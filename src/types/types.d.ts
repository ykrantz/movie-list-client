import { type } from "os";

type movieItemType = {
    id?: string;
    titleText?: { text?: string };
    primaryImage?: { url?: string };
    releaseYear?: { year?: string };
  };

type movieListType= movieItemType[]

// interface movieItemType  {
//   id?: string;
//   titleText?: { text?: string };
//   primaryImage?: { url?: string };
//   releaseYear?: { year?: string };
// };
// interface movieListType{
//   movieItemType[];
// } 

type handleSetMovieListType= (movieList:movieListType)=>void;
type handleSetString= (text:string)=>void;

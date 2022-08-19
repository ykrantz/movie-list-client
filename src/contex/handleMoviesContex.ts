import { createContext } from "react";

type movieItemApi = {
    id: string;
    titleText: { text: string };
    primaryImage: { url: string };
    releaseYear: { year: string };
  };
  
interface MoviesContextInterface {
  movieList: Array<movieItemApi>;
}

const handleMoviesContex =createContext<MoviesContextInterface | null>(null);
export default handleMoviesContex
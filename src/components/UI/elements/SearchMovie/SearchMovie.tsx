import { useContext } from "react";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import moviesContex from "../../../../contex/moviesContex";
import { movieListType } from "../../../../types/types";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import InputTextAtom from "../../atoms/InputTextAtom/InputTextAtom";

// type movieItemType = {
//   id?: string;
//   titleText?: { text?: string };
//   primaryImage?: { url?: string };
//   releaseYear?: { year?: string };
// };

// type movieItemType = {
//   id: string;
//   titleText: { text?: string };
//   primaryImage: { url?: string };
//   releaseYear: { year?: string };
// };

// type appProps = {
//   handleMovieList: (moviesList: Array<movieItemType>) => void;
// };
// type appProps = {
//   handleMovieList: (moviesList: Array<movieItemType>) => void;
// };
// type appProps = {
//   // handleMovieList: (moviesList: movieListType | {}) => void;
//   handleMovieList: (moviesList: movieListType | {}) => void;
// };

// const SearchMovie = ({ handleMovieList }: appProps): JSX.Element => {
const SearchMovie = (): JSX.Element => {
  const moviesCtx = useContext(moviesContex);

  const serachMoviesFunc = async () => {
    console.log("seraching", moviesCtx?.inputText);

    // const moviesListResults: movieListType | [{}] =
    // const moviesListResults: movieListType = await searchMovieFromApi(
    const moviesListResults: any = await searchMovieFromApi(
      moviesCtx?.inputText
      // "lion"
    );
    // console.log({ moviesListResults });

    // const moviesListResults: Array<movieItemType> =
    //TODO: search input from API
    console.log({ moviesListResults }, 10);

    if (moviesListResults) {
      // moviesCtx?.handleMovieList(moviesListResults.results);
      moviesCtx?.handleMovieList(moviesListResults?.results);
    }
    // console.log(moviesCtx?.movieList, 11);
  };
  return (
    <div>
      <ButtonAtom title="search" buttonFunc={serachMoviesFunc} />
      <InputTextAtom label="movie name" />
    </div>
  );
};

export default SearchMovie;

import { useContext } from "react";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import moviesContex from "../../../../contex/moviesContex";
import { movieListType } from "../../../../types/types";
import filterMovieList from "../../../../actions/filterMovieList";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import InputTextAtom from "../../atoms/InputTextAtom/InputTextAtom";
import searchMovieFromApiByKeyword from "../../../../actions/searchMovieFromApiByKeyword";
// import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Grid, Stack } from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { useNavigate } from "react-router-dom";

import "./SearchMovie.css";
import messageContex from "../../../../contex/messageContex";
// import messageContex from "../../../../contex/messageContex";

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
type appProps = {
  searchMoviesFunc: (textSearch: string) => Promise<boolean>;
};
// type appProps = {
//   // handleMovieList: (moviesList: movieListType | {}) => void;
//   handleMovieList: (moviesList: movieListType | {}) => void;
// };

// const SearchMovie = ({ handleMovieList }: appProps): JSX.Element => {
const SearchMovie = ({ searchMoviesFunc }: appProps): JSX.Element => {
  const moviesCtx = useContext(moviesContex);
  const messageCtx = useContext(messageContex);
  const navigate = useNavigate();

  const deleteInput = (): void => {
    moviesCtx?.handleInputText("");
    moviesCtx?.handleIsUpdateFromServer(false);
  };
  const serachMoviesFunc = async () => {
    try {
      const textToSerach = moviesCtx?.inputText ? moviesCtx.inputText : "";
      if (!textToSerach) throw "no text to search";
      const hasResults = await searchMoviesFunc(textToSerach);
      if (hasResults) {
        navigate(`/movie-page-results/${moviesCtx?.inputText}/1`);
      }
      // try {
      //   console.log("seraching", moviesCtx?.inputText);

      //   // const moviesListResults: movieListType | [{}] =
      //   // const moviesListResults: movieListType = await searchMovieFromApi(
      //   if (moviesCtx?.currentSearch === moviesCtx?.inputText) {
      //     // console.log("Already searched");
      //     messageCtx?.changeMessage("Already searched", "error");
      //     throw "Already searched";
      //   }
      //   moviesCtx?.handleIsLoading(true);

      //   moviesCtx?.handleSetCurrentSearch(moviesCtx?.inputText);

      //   const moviesListResults: any = await searchMovieFromApi(
      //     moviesCtx?.inputText
      //   );

      //   moviesCtx?.handleIsLoading(false);
      //   if (moviesListResults) {
      //     moviesCtx?.handleIsUpdateFromServer(true);
      //     const filteredMovieList = filterMovieList(moviesListResults?.results);

      //     moviesCtx?.handleMovieList(filteredMovieList);
      //     navigate(`/movie-page-results/${moviesCtx?.inputText}/1`);
      //   } else {
      //     console.log("no answer from server");
      //     moviesCtx?.handleMovieList([]);
      //     messageCtx?.changeMessage("no answer from server", "error");
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <div className="SearchMovie-container">
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <ButtonAtom
          title={<ClearIcon />}
          buttonFunc={deleteInput}
          isIcon={true}
          color="error"
          tooltipTitle="Clear"
          isDisabled={moviesCtx?.inputText ? false : true}
        />

        <InputTextAtom label="movie name" funcOnEnterPress={serachMoviesFunc} />

        <ButtonAtom
          title={<SearchIcon />}
          buttonFunc={serachMoviesFunc}
          isIcon={true}
          color="primary"
          tooltipTitle="serach movie"
          isDisabled={moviesCtx?.inputText ? false : true}
        />
      </Stack>
    </div>
  );
};

export default SearchMovie;

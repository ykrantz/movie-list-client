import { useContext } from "react";
import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import moviesContex from "../../../../contex/moviesContex";
import { movieListType } from "../../../../types/types";
import filterMovieList from "../../../../actions/filterMovieList";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import InputTextAtom from "../../atoms/InputTextAtom/InputTextAtom";
import searchMovieFromApiByKeyword from "../../../../actions/searchMovieFromApiByKeyword";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Grid, Stack } from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { useNavigate } from "react-router-dom";

import "./SearchMovie.css";
import messageContex from "../../../../contex/messageContex";

type appProps = {
  searchMoviesFunc: (textSearch: string) => Promise<boolean>;
};

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

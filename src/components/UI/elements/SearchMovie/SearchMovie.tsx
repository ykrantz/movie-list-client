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
  const navigate = useNavigate();

  const deleteInput = (): void => {
    moviesCtx?.handleInputText("");
    moviesCtx?.handleIsUpdateFromServer(false);
  };
  const serachMoviesFunc = async () => {
    console.log("seraching", moviesCtx?.inputText);

    // const moviesListResults: movieListType | [{}] =
    // const moviesListResults: movieListType = await searchMovieFromApi(
    const moviesListResults: any = await searchMovieFromApi(
      moviesCtx?.inputText
      // "lion"
    );
    // const moviesListResults: any = await searchMovieFromApiByKeyword(
    //   moviesCtx?.inputText
    //   // "lion"
    // );
    // console.log({ moviesListResults });

    // const moviesListResults: Array<movieItemType> =
    //TODO: search input from API
    // console.log({ moviesListResults }, 10);

    if (moviesListResults) {
      const filteredMovieList = filterMovieList(moviesListResults?.results);
      // moviesCtx?.handleMovieList(moviesListResults.results);
      // moviesCtx?.handleMovieList(moviesListResults?.results);
      console.log({ filteredMovieList });

      moviesCtx?.handleMovieList(filteredMovieList);
    }
    moviesCtx?.handleIsUpdateFromServer(true);
    navigate(`/movie-page-results/${moviesCtx?.inputText}/1`);
    // console.log(moviesCtx?.movieList, 11);
  };
  return (
    <div className="SearchMovie-container">
      {/* <Grid container spacing={2}>
        <Grid item xs={4}> */}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"

        // padding="5"
      >
        {/* <Grid item xs={2}> */}
        <ButtonAtom
          title={<ClearIcon />}
          buttonFunc={deleteInput}
          isIcon={true}
          color="error"
          tooltipTitle="Clear"
        />
        {/* </Grid> */}
        {/* <Grid item xs={6}> */}
        <InputTextAtom label="movie name" funcOnEnterPress={serachMoviesFunc} />
        {/* </Grid> */}
        {/* <ButtonAtom title="search" buttonFunc={serachMoviesFunc} /> */}
        {/* <Grid item xs={2}> */}
        <ButtonAtom
          title={<SearchIcon />}
          buttonFunc={serachMoviesFunc}
          isIcon={true}
          color="primary"
          tooltipTitle="serach movie"
        />
        {/* </Grid> */}
      </Stack>
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

export default SearchMovie;

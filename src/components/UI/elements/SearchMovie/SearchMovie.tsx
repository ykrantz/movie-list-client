import searchMovieFromApi from "../../../../actions/searchMovieFromApi";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import InputTextAtom from "../../atoms/ButtonAtom/InputTextAtom";

type movieItemApi = {
  id?: string;
  titleText?: { text?: string };
  primaryImage?: { url?: string };
  releaseYear?: { year?: string };
};

type appProps = {
  handleMovieList?: (moviesList: Array<movieItemApi>) => void;
};

const SearchMovie = ({ handleMovieList }: appProps): JSX.Element => {
  const serachMoviesFunc = async () => {
    const moviesListResults: Array<movieItemApi> | [{}] =
      await searchMovieFromApi("lion king");
    if (moviesListResults !== undefined) {
      handleMovieList(moviesListResults);
    }
  };
  return (
    <div>
      <ButtonAtom title="search" buttonFunc={serachMoviesFunc} />
      <InputTextAtom label="movie name" />
    </div>
  );
};

export default SearchMovie;

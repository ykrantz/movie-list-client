import SearchMovie from "../../../UI/elements/SearchMovie/SearchMovie";
import SearchAndMovieResults from "../../../UI/features/SearchAndMovieResults/SearchAndMovieResults";
import "./BodyMainPage.css";
const BodyMainPage = (): JSX.Element => {
  return (
    <div>
      <SearchAndMovieResults />
    </div>
  );
};

export default BodyMainPage;

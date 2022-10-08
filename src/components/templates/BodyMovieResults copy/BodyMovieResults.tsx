// import SearchAndMovieResults from "../../UI/features/SearchAndMovieResults/SearchAndMovieResults";
import SearchAndMovieResults from "../../UI/features/SearchAndMovieResults/SearchAndMovieResults";
// import "./";
import { useParams } from "react-router-dom";

const BodyMovieResults = (): JSX.Element => {
  const { page } = useParams();
  const pageNum: number = Number(page);

  return (
    <div>
      <SearchAndMovieResults
      //  pageNum={pageNum}
      />
      {/* <SearchMovie /> */}
    </div>
  );
};

export default BodyMovieResults;

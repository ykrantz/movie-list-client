// import SearchAndMovieResults from "../../UI/features/SearchAndMovieResults/SearchAndMovieResults";
import SearchAndMovieResults from "../../UI/features/SearchAndMovieResults/SearchAndMovieResults";
// import "./";
import { useParams } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

type appProps = {
  pageType: "main" | "movieResults";
};

const BodyMainMovieResults = ({ pageType }: appProps): JSX.Element => {
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

export default BodyMainMovieResults;

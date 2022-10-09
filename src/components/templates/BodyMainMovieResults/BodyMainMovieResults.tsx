import SearchAndMovieResults from "../../UI/features/SearchAndMovieResults/SearchAndMovieResults";
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
      <SearchAndMovieResults />
    </div>
  );
};

export default BodyMainMovieResults;

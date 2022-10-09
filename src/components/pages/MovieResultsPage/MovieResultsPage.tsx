import { Grid } from "@mui/material";
import BodyMainMovieResults from "../../templates/BodyMainMovieResults/BodyMainMovieResults";
import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";

const MovieResultsPage = (): JSX.Element => {
  return (
    <div>
      <Header />
      <BodyMainMovieResults pageType="movieResults" />
      <Footer />
    </div>
  );
};

export default MovieResultsPage;

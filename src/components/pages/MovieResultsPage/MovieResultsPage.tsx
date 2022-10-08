import { Grid } from "@mui/material";
import BodyMainMovieResults from "../../templates/BodyMainMovieResults/BodyMainMovieResults";
import BodyMovieResults from "../../templates/archive/BodyMovieResults/BodyMovieResults";
import Footer from "../../templates/Footer/Footer";
// import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";

const MovieResultsPage = (): JSX.Element => {
  return (
    <div>
      {/* <Grid container spacing={2}> */}
      <Header />
      <BodyMainMovieResults pageType="movieResults" />
      <Footer />
      {/* </Grid> */}
    </div>
  );
};

export default MovieResultsPage;

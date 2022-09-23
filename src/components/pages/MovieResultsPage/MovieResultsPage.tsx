import { Grid } from "@mui/material";
import BodyMovieResults from "../../templates/BodyMovieResults/BodyMovieResults";
import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";

const MovieResultsPage = (): JSX.Element => {
  return (
    <div>
      {/* <Grid container spacing={2}> */}
      <Header />
      <BodyMovieResults />
      <Footer />
      {/* </Grid> */}
    </div>
  );
};

export default MovieResultsPage;

import { Grid } from "@mui/material";
import BodyMainMovieResults from "../../templates/BodyMainMovieResults/BodyMainMovieResults";
import BodyMainPage from "../../templates/archive/BodyMainPage/BodyMainPage";
import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Header />
      <BodyMainMovieResults pageType="main" />
      <Footer />
    </div>
  );
};

export default HomePage;

import { Grid } from "@mui/material";
import BodyMainMovieResults from "../../templates/BodyMainMovieResults/BodyMainMovieResults";
import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";

// require("dotenv").config();

const HomePage = (): JSX.Element => {
  console.log(57);
  console.log(process.env.NODE_ENV_TEST, process.env.TEST_2, 58);

  return (
    <div>
      <Header />
      <BodyMainMovieResults pageType="main" />
      <Footer />
    </div>
  );
};

export default HomePage;

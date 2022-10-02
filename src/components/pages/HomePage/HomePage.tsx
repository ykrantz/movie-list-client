import { Grid } from "@mui/material";
import BodyMainPage from "../../templates/BodyMainPage/BodyMainPage";
import Footer from "../../templates/Footer/Footer";
// import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";

const HomePage = (): JSX.Element => {
  return (
    <div>
      {/* <Grid container spacing={2}> */}
      <Header />
      <BodyMainPage />
      <Footer />
      {/* </Grid> */}
    </div>
  );
};

export default HomePage;

import Footer from "../../templates/Footer/Footer";
import Header from "../../templates/Header/Header";
import "./AboutMePage.css";
import AboutMePageBody from "../../templates/AboutMePageBody/AboutMePageBody";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import React from "react";
// import AboutMePageBody from "../../components/AboutMePageBody/AboutMePageBody";

const AboutMePage = () => {
  return (
    <div>
      <Header />
      <AboutMePageBody />
      <Footer />
    </div>
  );
};

export default AboutMePage;

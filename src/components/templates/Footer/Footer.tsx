// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import SearchAndMovieResults from "../../UI/features/SearchAndMovieResults/SearchAndMovieResults";
import "./Footer.css";
const Footer = (): JSX.Element => {
  return (
    <div>
      <HashLink to="#" smooth>
        return to top
      </HashLink>
      {/* <SearchAndMovieResults></SearchAndMovieResults> */}
    </div>
  );
};

export default Footer;

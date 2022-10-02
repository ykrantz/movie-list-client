// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
// import movieContex from "../../../contex/moviesContex";
import MessageNote from "../../UI/atoms/MessageNote/MessageNote";
// import SearchAndMovieResults from "../../UI/features/SearchAndMovieResults/SearchAndMovieResults";
import "./Footer.css";
import messageContex from "../../../contex/messageContex";

const Footer = (): JSX.Element => {
  const messageCtx = useContext(messageContex);
  return (
    <>
      <div className="Footer-container">
        <MessageNote
          messageStr={messageCtx?.message?.messageStr}
          alertKind={messageCtx?.message?.alertKind}
        />

        <HashLink to="#" smooth>
          return to top
        </HashLink>
        {/* <SearchAndMovieResults></SearchAndMovieResults> */}
      </div>
    </>
  );
};

export default Footer;

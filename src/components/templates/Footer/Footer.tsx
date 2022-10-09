// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";

import "./Footer.css";
import MessageNote from "../../UI/atoms/MessageNote/MessageNote";
import messageContex from "../../../contex/messageContex";
import moviesContex from "../../../contex/moviesContex";
import MovieListResults from "../../UI/elements/MovieListResults/MovieListResults";

const Footer = (): JSX.Element => {
  const messageCtx = useContext(messageContex);
  const MovieCtx = useContext(moviesContex);
  return (
    <>
      <div className="Footer-container">
        <MessageNote
          messageStr={messageCtx?.message?.messageStr}
          alertKind={messageCtx?.message?.alertKind}
        />

        {MovieCtx?.movieList && MovieCtx.movieList.length > 0 && (
          <HashLink to="#" smooth>
            {/* <HashLink to={"/#movieListResults"} smooth> */}
            return to top
          </HashLink>
        )}
        {/* <SearchAndMovieResults></SearchAndMovieResults> */}
      </div>
    </>
  );
};

export default Footer;

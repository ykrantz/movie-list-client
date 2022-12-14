import "./MoviePageLink.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import moviesContex from "../../../../contex/moviesContex";
import * as React from "react";

type appProps = {
  pagesPath: string;
  numberOfPages: number;
};

const MoviePageLink = ({ numberOfPages, pagesPath }: appProps): JSX.Element => {
  const { page, text } = useParams();
  const movieCtx = React.useContext(moviesContex);

  const pageNums: number[] = [];
  for (let i = 0; i < numberOfPages; i++) {
    pageNums.push(i + 1);
  }

  return (
    <div className="MoviePageLink-container">
      {pageNums.map((num) => (
        <Link
          // color="black"
          className={`MoviePageLink-pageLink ${
            Number(page) === num && "MoviePageLink-currentPage"
          }`}
          key={num}
          to={`${pagesPath}/${text ? text : "demo"}/${num}`}
        >
          {num}
        </Link>
      ))}
    </div>
  );
};

export default MoviePageLink;

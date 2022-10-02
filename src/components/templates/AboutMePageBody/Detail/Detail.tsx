import "./Detail.css";

import React from "react";
type appProps = {
  detail: string;
};

const Detail = ({ detail }: appProps) => {
  return <li className="Detail-li">{detail}</li>;
};

export default Detail;

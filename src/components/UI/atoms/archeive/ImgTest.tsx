import React from "react";

const ImgTest = () => {
  const rnd = Math.ceil(Math.random() * 200);
  var img1 = new Image();
  img1.onload = function () {
    console.log("image is loaded", rnd);
  };
  img1.src = `https://random.imagecdn.app/500/${rnd}`;
  return (
    <div>
      {/* {img1} */}
      {/* <img
        src={`https://random.imagecdn.app/500/${rnd}`}
        src={img1}
        onLoad={() => console.log("sadda")}
      > */}
      {/* </img> */}
    </div>
  );
};

export default ImgTest;

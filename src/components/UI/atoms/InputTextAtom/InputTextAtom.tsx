import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import moviesContex from "../../../../contex/moviesContex";

type appProps = {
  label?: string;
  funcOnEnterPress: () => void;
};

const InputTextAtom = ({
  label,
  funcOnEnterPress: serachMoviesFunc,
}: appProps): JSX.Element => {
  // const [inputText,setInputText]=useState("");
  const moviesCtx = useContext(moviesContex);

  const handleEnterPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(17, ev.key);

    // if (ev.key == "Enter") {
    //   // alert("dd");

    //   console.log(18);
    // debugger;
    serachMoviesFunc();
    // ev.preventDefault();
    // }
  };

  //    const handleInputText= (text:string):void =>{
  const handleInputTextAtom = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const text: string = e.target.value;
    // console.log({ text });

    moviesCtx?.handleInputText(text);
  };
  // console.log(inputText);

  // TODO: fix the varinat

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0.1, width: "20ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={moviesCtx?.inputText}
        onChange={handleInputTextAtom}
        // style={{
        //   maxWidth: "80%",
        //   minWidth: "40%",
        // }}
        onKeyPress={
          // () => console.log(22)
          // ev.preventDefault();
          (ev: React.KeyboardEvent<HTMLInputElement>) => {
            // console.log(19);
            if (ev.key === "Enter") {
              handleEnterPress(ev);
              ev.preventDefault();
            }
          }
        }
      />
    </Box>
  );
};

export default InputTextAtom;

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import moviesContex from "../../../../contex/moviesContex";

type appProps = {
  label?: string;
};

const InputTextAtom = ({ label }: appProps): JSX.Element => {
  // const [inputText,setInputText]=useState("");
  const moviesCtx = useContext(moviesContex);

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
        "& > :not(style)": { m: 1, width: "25ch" },
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
      />
    </Box>
  );
};

export default InputTextAtom;

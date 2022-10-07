import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import moviesContex from "../../../../contex/moviesContex";
import themeContex from "../../../../contex/themeContex";

// import { createMuiTheme } from "@material-ui/styles";
// import { ThemeProvider } from "@material-ui/styles";
// import CssBaseline from "@material-ui/CssBaseline";
// import CssBaseline from "@mui/material/CssBaseline";

// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Paper from "@mui/material/Paper";

type appProps = {
  label?: string;
  funcOnEnterPress: () => void;
};

// const theme = createMuiTheme({

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

const InputTextAtom = ({
  label,
  funcOnEnterPress: serachMoviesFunc,
}: appProps): JSX.Element => {
  // const [inputText,setInputText]=useState("");
  const moviesCtx = useContext(moviesContex);
  const themeCtx = useContext(themeContex);

  const darkTheme = createTheme({
    palette: {
      mode: themeCtx?.theme ? themeCtx?.theme : "light",
    },
  });

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

  // con

  // useEffect(()={

  // },[]);
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
      {/* <Paper
        sx={{ backgroundColor: "var(--background-primary)", color: "blue" }}
      > */}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <TextField
          focused
          id="outlined-basic"
          label={label}
          variant="outlined"
          value={moviesCtx?.inputText}
          onChange={handleInputTextAtom}
          // color={themeCtx?.theme === "dark" ? "secondary" : "primary"}
          // style={{ border: "red" }}
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
      </ThemeProvider>
      {/* </Paper> */}
    </Box>
  );
};

export default InputTextAtom;

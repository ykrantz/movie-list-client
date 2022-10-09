import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useContext, useEffect, useState } from "react";
import moviesContex from "../../../../contex/moviesContex";
import themeContex from "../../../../contex/themeContex";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type appProps = {
  label?: string;
  funcOnEnterPress: () => void;
};

const InputTextAtom = ({
  label,
  funcOnEnterPress: serachMoviesFunc,
}: appProps): JSX.Element => {
  const moviesCtx = useContext(moviesContex);
  const themeCtx = useContext(themeContex);

  const darkTheme = createTheme({
    palette: {
      mode: themeCtx?.theme ? themeCtx?.theme : "light",
    },
  });

  const handleEnterPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    serachMoviesFunc();
  };

  const handleInputTextAtom = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const text: string = e.target.value;

    moviesCtx?.handleInputText(text);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0.1, width: "20ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <TextField
          focused
          id="outlined-basic"
          label={label}
          variant="outlined"
          value={moviesCtx?.inputText}
          onChange={handleInputTextAtom}
          onKeyPress={(ev: React.KeyboardEvent<HTMLInputElement>) => {
            if (ev.key === "Enter") {
              handleEnterPress(ev);
              ev.preventDefault();
            }
          }}
        />
      </ThemeProvider>
    </Box>
  );
};

export default InputTextAtom;

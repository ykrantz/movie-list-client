// import { Button } from "@mui/material";

import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import { useContext } from "react";
import themeContex from "../../../../contex/themeContex";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type appProps = {
  title?: string | React.ReactElement;
  buttonFunc?: () => void;
  isIcon: boolean;
  color: "primary" | "error";
  tooltipTitle: string;
  isDisabled: boolean;
};

const ButtonAtom = ({
  title,
  buttonFunc,
  isIcon,
  color,
  tooltipTitle,
  isDisabled = false,
}: appProps): JSX.Element => {
  const themeCtx = useContext(themeContex);

  const darkTheme = createTheme({
    palette: {
      mode: themeCtx?.theme ? themeCtx?.theme : "light",
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Tooltip title={tooltipTitle}>
          {isIcon ? (
            <IconButton
              color={color}
              onClick={buttonFunc}
              disabled={isDisabled}
              // disabled={true}
            >
              {title}
            </IconButton>
          ) : (
            <Button
              variant="contained"
              onClick={buttonFunc}
              style={
                {
                  // maxWidth: "10px",
                  // paddingLeft: "0",
                  // paddingRight: "0",
                  // padding: "0",
                }
              }
            >
              {/* {title?.length && title} */}
              {title}
            </Button>
          )}
        </Tooltip>
      </ThemeProvider>
    </div>
  );
};

export default ButtonAtom;

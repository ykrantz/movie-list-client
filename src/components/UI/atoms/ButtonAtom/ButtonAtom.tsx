// import { Button } from "@mui/material";

import { Button } from "@mui/material";

type appProps = {
  title?: string | React.ReactElement;
  buttonFunc?: () => void;
};

const ButtonAtom = ({ title, buttonFunc }: appProps): JSX.Element => {
  return (
    <div>
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
    </div>
  );
};

export default ButtonAtom;

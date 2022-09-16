// import { Button } from "@mui/material";

import { Button } from "@mui/material";

type appProps = {
  title?: string | React.ReactElement;
  buttonFunc?: () => void;
};

const ButtonAtom = ({ title, buttonFunc }: appProps): JSX.Element => {
  return (
    <div>
      <Button variant="contained" onClick={buttonFunc}>
        {/* {title?.length && title} */}
        {title}
      </Button>
    </div>
  );
};

export default ButtonAtom;

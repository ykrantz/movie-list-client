// import { Button } from "@mui/material";

import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";

type appProps = {
  title?: string | React.ReactElement;
  buttonFunc?: () => void;
  isIcon: boolean;
  color: "primary" | "error";
  tooltipTitle: string;
};

const ButtonAtom = ({
  title,
  buttonFunc,
  isIcon,
  color,
  tooltipTitle,
}: appProps): JSX.Element => {
  return (
    <div>
      <Tooltip title={tooltipTitle}>
        {isIcon ? (
          <IconButton color={color} onClick={buttonFunc}>
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
    </div>
  );
};

export default ButtonAtom;

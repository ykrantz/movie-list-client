// import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { type } from "os";

type appProps = {
  title?: string;
  img?: string;
  year?: string;
};
const MovieItem = ({ title, img, year }: appProps): JSX.Element => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <img src={img}></img>
        <ListItemText primary={title} />
        <ListItemText primary={year} />
      </ListItemButton>
    </ListItem>
  );
};

export default MovieItem;

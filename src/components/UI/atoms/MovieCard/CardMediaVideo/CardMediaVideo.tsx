import { CardMedia } from "@mui/material";

type appProp = {
  image?: string;
  alt?: string;
};
const CardMediaVideo = ({ image, alt }: appProp) => {
  return (
    <CardMedia
      image={image}
      alt={alt}
      component="img"
      height="200 "
      sx={{ objectFit: "contain" }}
    />
  );
};

export default CardMediaVideo;

import { forwardRef } from "react";
import { Zoom, Box } from "@mui/material";

const ImageBox = forwardRef((props, ref) => {
  return (
    <Zoom in={true} appear={true} timeout={500}>
      <Box
        ref={ref}
        alignSelf={"center"}
        component="img"
        loading="lazy"
        {...props}
      />
    </Zoom>
  );
});

ImageBox.displayName = "ImageBox"; // Add display name

export default ImageBox;

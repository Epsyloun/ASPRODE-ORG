import { forwardRef, useEffect, useState } from "react";
import { Zoom, Box, Slide, Fade } from "@mui/material";
import PropTypes from "prop-types";

const ImageBox = forwardRef((props, ref) => {
  const { isVisible = true, ...otherProps } = props;
  return (
    <Zoom in={isVisible} appear={true} timeout={500}>
      <Box
        ref={ref}
        alignSelf={"center"}
        component="img"
        loading="lazy"
        {...otherProps}
      />
    </Zoom>
  );
});

ImageBox.displayName = "ImageBox"; // Add display name

const ImageSlideBox = forwardRef((props, ref) => {
  const {
    direction = "up",
    containerRef = null,
    isChange = null,
    timeout = 1000,
    fadeTimeout = 500, // Tiempo para el fade
    delay = 0, // Tiempo de retraso antes de aparecer
    ...otherProps
  } = props;

  const [containerNode, setContainerNode] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Configura el contenedor del slide y el estado de montaje
  useEffect(() => {
    if (containerRef?.current) {
      setContainerNode(containerRef.current);
      setIsMounted(false);

      // Aplica el delay antes de activar el fade y el slide
      const timer = setTimeout(() => {
        setIsMounted(true);
      }, 250);

      return () => clearTimeout(timer); // Limpieza del timeout al desmontar
    }
  }, [containerRef, isChange, delay]);

  return (
    <Slide
      in={containerNode && isMounted}
      appear
      timeout={{
        enter: timeout,
        exit: 0,
      }}
      container={containerNode}
      direction={direction}
    >
      <Box {...otherProps}>
        <Fade in={isMounted} timeout={{ enter: fadeTimeout, exit: 250 }}>
          <Box
            ref={ref}
            alignSelf={"center"}
            component="img"
            loading="lazy"
            visibility={isMounted ? "visible" : "hidden"}
            {...otherProps}
          />
        </Fade>
      </Box>
    </Slide>
  );
});

ImageSlideBox.displayName = "ImageSlideBox";

ImageSlideBox.propTypes = {
  direction: PropTypes.string,
  containerRef: PropTypes.object,
  isChange: PropTypes.number,
  timeout: PropTypes.number,
  fadeTimeout: PropTypes.number,
  delay: PropTypes.number,
};

export { ImageSlideBox };
export default ImageBox;

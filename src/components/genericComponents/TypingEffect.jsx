import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const TypingEffect = ({ text, speed, variant, in: isVisible }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [isVisible, text, speed]);

  return <Typography variant={variant}>{displayedText}</Typography>;
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number, // Velocidad en ms entre caracteres
  variant: PropTypes.string, // Variante del componente Typography
  in: PropTypes.bool.isRequired, // Controla si debe comenzar a escribir
};

TypingEffect.defaultProps = {
  speed: 50, // Velocidad predeterminada de 50ms entre caracteres
  variant: "h6", // Variante predeterminada
};

export default TypingEffect;

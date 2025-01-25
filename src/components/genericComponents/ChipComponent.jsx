import React from "react";
import Chip from "@mui/material/Chip";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import PropTypes from "prop-types";

export default function ChipComponent({
  label = "Bienvenido a nuestra ONG",
  color = "white",
  iconColor = "#ef7230",
  bgColor = "rgba(255, 255, 255, 0.3)",
  fontSize = "1rem",
}) {
  return (
    <Chip
      icon={<WavingHandIcon sx={{ color: `${iconColor} !important` }} />}
      label={label}
      color={color}
      sx={{
        color: "white.main",
        bgcolor: bgColor,
        fontSize: fontSize,
      }}
    />
  );
}

ChipComponent.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  iconColor: PropTypes.string,
  bgColor: PropTypes.string,
  fontSize: PropTypes.string,
};

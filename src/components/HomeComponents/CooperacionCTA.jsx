import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

export default function CooperacionCTA() {
  const [totalWidth, setTotalWidth] = useState(0);
  const imageWidth = window.innerWidth;
  const [images] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjjPBgIXbmU-zhnJXCx3U1piAdwFaC6lasw&s",
    "https://i.blogs.es/ceda9c/dalle/450_1000.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6PTgrG1FSAPViH9p7b4-0nbDVMu2xFutnw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjjPBgIXbmU-zhnJXCx3U1piAdwFaC6lasw&s",
    "https://i.blogs.es/ceda9c/dalle/450_1000.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6PTgrG1FSAPViH9p7b4-0nbDVMu2xFutnw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjjPBgIXbmU-zhnJXCx3U1piAdwFaC6lasw&s",
  ]);

  const boxWidth = useRef(null);

  useEffect(() => {
    if (boxWidth.current) {
      // Esperar a que las imágenes se carguen para calcular el ancho acumulado
      const calculateTotalWidth = () => {
        const images = boxWidth.current.querySelectorAll("img");
        const totalWidth = Array.from(images).reduce(
          (acc, img) => acc + img.offsetWidth + 16,
          0
        );
        const paddingWidth = 32 + 4 * 12;
        const newTotalWidth = totalWidth + paddingWidth + imageWidth / 10;
        console.log("total" + newTotalWidth);
        setTotalWidth(newTotalWidth);
      };

      calculateTotalWidth();

      // Recalcular el ancho si se redimensiona la ventana
      window.addEventListener("resize", calculateTotalWidth);
      return () => window.removeEventListener("resize", calculateTotalWidth);
    }
  }, [images]);

  return (
    <Stack my={4}>
      <Typography
        variant="h3"
        fontWeight="bold"
        align="center"
        color="secondary.main"
        gutterBottom
      >
        Cooperación
      </Typography>
      <Box
        sx={{
          overflowX: "hidden",
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          px={12}
          ref={boxWidth}
          sx={{
            animation: totalWidth ? `slideXScroll 20s linear infinite` : "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {images.map((image, index) => (
            <img
              src={image}
              alt={"Cooperacion"}
              key={index}
              style={{ width: "300px", height: "auto", flexShrink: 0 }}
            />
          ))}
        </Stack>
      </Box>
      <style>
        {`
        @keyframes slideXScroll {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(calc(-${totalWidth}px + 100vw));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}
      </style>
    </Stack>
  );
}

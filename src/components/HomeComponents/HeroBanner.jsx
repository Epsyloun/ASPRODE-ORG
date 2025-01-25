import {
  Box,
  Typography,
  Grid,
  Stack,
  Chip,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import backgroundVideo from "../../assets/SSBU.mp4";
import logo from "../../assets/logo.png";
import img1 from "../../assets/heroImg.png";
import ImageBox from "../genericComponents/ImageBox";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import useNavBarSpacing from "../../hooks/useNavBarSpacing";
import ChipComponent from "../genericComponents/ChipComponent";

export default function HeroBanner() {
  const heightWindow = useNavBarSpacing();

  console.log(heightWindow);
  return (
    <Box
      sx={{
        position: "relative", // Necesario para posicionar elementos sobre el video
        minHeight: "100svh",
        height: "auto",
        overflow: "hidden", // Evita que el video se salga de los límites
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Asegura que el video cubra toda el área
          zIndex: -1, // Manda el video al fondo
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contenido del Hero */}
      <Box
        sx={{
          position: "relative", // Para posicionar elementos encima del video
          zIndex: 1,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100svh",
          width: "100%",
          minHeight: "500px",
          bgcolor: "rgb(15, 74, 154, 0.6)", // Fondo oscuro con transparencia
        }}
      >
        <Container>
          {heightWindow < 500 && (
            <Box
              sx={{
                height: "80px",
              }}
            />
          )}
          <Grid
            container
            direction={"row"}
            sx={{
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Grid item lg={6} xs={12}>
              <Stack
                direction="column"
                justifyContent={"center"}
                alignItems={"flex-start"}
                sx={{ width: "100%" }}
                spacing={2}
              >
                <ChipComponent />

                <Typography variant="h3" color={"white"} fontWeight={"bold"}>
                  Bienvenido a ASPRODE
                </Typography>
                <Typography variant="h5" color={"white"}>
                  la organización que busca reconstruir la sociedad a través de
                  la educación y la inclusión.
                </Typography>
                <Stack direction={"row"} spacing={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      borderRadius: "50px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      color="white"
                      py={1}
                      px={4}
                    >
                      Contactanos
                    </Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    color="white"
                    sx={{
                      borderRadius: "50px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      color="white"
                      py={1}
                      px={4}
                    >
                      Saber más
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              lg={6}
              xs={12}
              sx={{
                display: { xs: "none", lg: "flex" },
                height: "100svh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBox
                src={img1}
                alt="Ponencia"
                sx={{ width: "100%", height: "auto" }}
              />
            </Grid>
            {/* <Grid
              pb={4}
              item
              xs={12}
              sx={{
                alignSelf: "flex-end",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                width: "80%",
              }}>
              <Typography variant="body1" color={"white"} align="center">
                Descubre mas sobre nosotros
              </Typography>
              <IconButton
                sx={{
                  bgcolor: "white",
                  color: "white.main",
                  borderRadius: "50px",
                  mt: 1,
                  border: "1px solid white",
                }}>
                <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ChipComponent from "../components/genericComponents/ChipComponent";
import GalleryStepper from "../components/QuienesSomosComponents/GalleryStepper";
import InformativeSection from "../components/QuienesSomosComponents/InformativeSection";

export default function QuienesSomosContainer() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        display={"flex"}
        sx={{
          minHeight: "400px",
          height: "auto",
          maxHeight: "40vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.dark",
            position: "absolute",
            top: "0",
            left: "0",
            minHeight: "400px",
            height: "auto",
            maxHeight: "40vh",
            width: "100%",
          }}
        />
        <Container sx={{ zIndex: 2 }}>
          <Box sx={{ height: "150px" }} />
          <ChipComponent
            label={"Conoce más sobre nosotros"}
            bgColor={"rgba(255, 255, 255, 0.3)"}
            color={"white"}
            fontSize={"1rem"}
          />
          <Typography variant={"h2"} fontWeight={"bold"} color="secondary">
            Quienes Somos
          </Typography>
        </Container>
      </Stack>
      <InformativeSection />
      <Container>
        <GalleryStepper />
      </Container>
    </Grid>
  );
}

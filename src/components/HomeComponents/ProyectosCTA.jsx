import React from "react";
import { Container, Grid, Typography, Button, Stack, Box } from "@mui/material";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ImageBox from "../genericComponents/ImageBox";

export default function ProyectosCTA() {
  return (
    <Box my={4} bgcolor={"primary.main"}>
      <Container>
        <Grid container spacing={4} py={4} justifyContent={"center"}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              fontWeight="bold"
              align="center"
              color="white.main"
              gutterBottom
            >
              Conoce nuestras áreas de trabajo
            </Typography>
          </Grid>
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                bgcolor={"white.main"}
                spacing={2}
                p={2}
                alignItems="flex-start"
                sx={{ borderRadius: "20px" }}
              >
                {/* Icono */}
                <Box
                  p={2}
                  bgcolor={"secondary.main"}
                  sx={{ borderRadius: "50%" }}
                >
                  <CropRotateIcon sx={{ fontSize: 40, color: "white.main" }} />
                </Box>
                {/* Título */}
                <Typography
                  variant="h5"
                  color="primary.main"
                  fontWeight="bold"
                  align="center"
                >
                  Proyectos
                </Typography>
                {/* Descripción */}
                <Typography variant="body1" align="left" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vehicula, lacus nec ultrices aliquam, nunc sapien scelerisque
                  lectus, non fermentum odio sem eget libero.
                </Typography>
                <ImageBox
                  src={
                    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ES-ES-CAR-2048x2048.width-500.format-webp.webp"
                  }
                  alt="Proyectos"
                  sx={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
                {/* Botón */}
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    alignSelf: "center",
                    width: "50%",
                    borderRadius: "50px",
                    textTransform: "none",
                  }}
                >
                  Ver más
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

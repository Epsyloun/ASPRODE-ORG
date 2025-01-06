import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import ImageBox from "./ImageBox";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

const routesArray = [
  {
    title: "¿Quiénes somos?",
    path: "/quienes-somos",
  },
  {
    title: "Proyectos",
    path: "/proyectos",
  },
  {
    title: "Publicaciones",
    path: "/publicaciones",
  },
  {
    title: "Cooperación",
    path: "/cooperacion",
  },
  {
    title: "Contactanos",
    path: "/contactanos",
  },
];

export default function Footer() {
  return (
    <Box py={8} sx={{ bgcolor: "primary.dark" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ImageBox src={logoImg} sx={{ width: "100%", maxWidth: "300px" }} />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ height: "auto", my: { md: 4, lg: 0 } }}
          >
            <Grid
              container
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {routesArray.map((route, index) => (
                <Fragment key={index}>
                  <Grid item xs={12} md={2.3}>
                    <Link
                      to={route.path}
                      sx={{
                        textDecoration: "none",
                        color: "white",
                        "&:hover": {
                          color: "secondary.main",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="white"
                        align="center"
                        sx={{
                          textDecoration: "none",
                          color: "white",
                          transition: "0.1s ease-in-out",
                          "&:hover": {
                            color: "secondary.main",
                          },
                        }}
                      >
                        {route.title}
                      </Typography>
                    </Link>
                  </Grid>
                  {index < routesArray.length - 1 && (
                    <Grid
                      item
                      xs={12}
                      md={0.1}
                      sx={{
                        display: { xs: "none", md: "block" },
                        height: "100%",
                      }}
                    >
                      <Divider
                        orientation="vertical"
                        sx={{
                          height: "100%",
                          borderWidth: 2,
                          borderColor: "#ffffff",
                        }}
                      />
                    </Grid>
                  )}
                  {index < routesArray.length - 1 && (
                    <Grid
                      item
                      xs={12}
                      md={0.1}
                      sx={{
                        display: { xs: "flex", md: "none" },
                        justifyContent: "center",
                      }}
                    >
                      <Divider
                        orientation="horizontal"
                        sx={{
                          width: "50%",
                          borderWidth: 1,
                          borderColor: "#ffffff",
                        }}
                      />
                    </Grid>
                  )}
                </Fragment>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                variant="body1"
                color="white"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Siguenos en nuestras redes sociales
              </Typography>
              <ImageBox
                src="https://img.icons8.com/color/48/000000/facebook.png"
                alt="Facebook"
              />
              <ImageBox
                src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                alt="Instagram"
              />
              <ImageBox
                src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                alt="Twitter"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import logo from "../../assets/logo.png";
import ImageBox from "./ImageBox";
import usePositionWindow from "../../hooks/usePositionWindow";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const buttonRedirection = (url) => {
    navigate(url);
  };
  const scrollPosition = usePositionWindow();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={scrollPosition > 20 ? 4 : 0}
        sx={{
          bgcolor: scrollPosition > 20 ? "white.main" : "transparent",
          transition: "0.5s ease-in-out",
        }}
      >
        <Container>
          <Toolbar>
            <Stack
              direction="row"
              spacing={2}
              py={1}
              sx={{
                flexGrow: 1,
                alignItems: "center",
              }}
            >
              {/* Contenedor del logo con transición de tamaño */}
              <Box
                sx={{
                  height: scrollPosition > 20 ? "50px" : "100px", // Tamaño del logo
                  width: "auto",
                  transition: "0.25s ease-out", // Transición suave
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#00000010", borderRadius: "10%" },
                }}
                onClick={() => {
                  if (location.pathname !== "/") {
                    buttonRedirection("/");
                  } else {
                    window.scrollTo(0, 0);
                  }
                }}
              >
                <ImageBox
                  src={logo}
                  alt="Logo"
                  sx={{
                    height: "100%", // Ajusta al tamaño del contenedor
                    width: "100%", // Mantiene proporciones
                  }}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              {NavBarDesktop({ scrollPosition, buttonRedirection })}
              {NavBarMobile({
                open,
                toggleDrawer,
                scrollPosition,
                buttonRedirection,
              })}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

const NavBarDesktop = ({ scrollPosition, buttonRedirection }) => {
  return (
    <Stack
      direction="row"
      divider={
        <Divider
          orientation="vertical"
          sx={{ borderColor: "white.main" }}
          flexItem
        />
      }
      spacing={2}
      sx={{
        display: { xl: "flex", lg: "flex", md: "none", sm: "none", xs: "none" },
      }}
    >
      <Button
        onClick={() => buttonRedirection("/quienes-somos")}
        variant="text"
        color={scrollPosition > 20 ? "black" : "white"}
      >
        Quiénes somos
      </Button>
      <Button
        onClick={() => buttonRedirection("/proyectos")}
        variant="text"
        color={scrollPosition > 20 ? "black" : "white"}
      >
        Proyectos
      </Button>
      <Button
        onClick={() => buttonRedirection("/publicaciones")}
        variant="text"
        color={scrollPosition > 20 ? "black" : "white"}
      >
        Publicaciones
      </Button>
      <Button
        onClick={() => buttonRedirection("/cooperacion")}
        variant="text"
        color={scrollPosition > 20 ? "black" : "white"}
      >
        Cooperación
      </Button>
      <Button
        onClick={() => buttonRedirection("/contactanos")}
        variant="contained"
        color="primary"
      >
        Contáctanos
      </Button>
    </Stack>
  );
};

const NavBarMobile = ({
  open,
  toggleDrawer,
  scrollPosition,
  buttonRedirection,
}) => {
  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
        }}
      >
        <MenuIcon
          sx={{
            color: scrollPosition > 20 ? "primary.main" : "white.main",
            fontSize: "2rem",
          }}
        />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Stack
          px={4}
          py={2}
          sx={{
            width: { xs: "100vw", sm: "50vw", md: "30vw", lg: "20vw" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => buttonRedirection("/quienes-somos")}
            fullWidth
            variant="text"
          >
            Quiénes somos
          </Button>
          <Button
            onClick={() => buttonRedirection("/proyectos")}
            fullWidth
            variant="text"
          >
            Proyectos
          </Button>
          <Button
            onClick={() => buttonRedirection("/publicaciones")}
            fullWidth
            variant="text"
          >
            Publicaciones
          </Button>
          <Button
            onClick={() => buttonRedirection("/cooperacion")}
            fullWidth
            variant="text"
          >
            Cooperación
          </Button>
          <Button
            onClick={() => buttonRedirection("/contactanos")}
            fullWidth
            variant="contained"
            color="primary"
          >
            Contáctanos
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

//proptypes de los elementos
Navbar.propTypes = {
  scrollPosition: PropTypes.number,
  buttonRedirection: PropTypes.func,
};
NavBarDesktop.propTypes = {
  scrollPosition: PropTypes.number,
  buttonRedirection: PropTypes.func,
};
NavBarMobile.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  scrollPosition: PropTypes.number,
  buttonRedirection: PropTypes.func,
};

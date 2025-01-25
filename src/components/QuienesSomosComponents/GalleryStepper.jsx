import { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Fade,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import { ImageSlideBox } from "../genericComponents/ImageBox";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function GalleryStepper() {
  const steps = [
    {
      stepId: 1,
      label: "Select campaign settings",
      Image:
        "https://pokewalls.wordpress.com/wp-content/uploads/2011/01/94gengar1920x1200.jpg?w=400",
    },
    {
      stepId: 2,
      label: "Create an ad group",
      Image:
        "https://pokewalls.wordpress.com/wp-content/uploads/2011/01/94gengar1920x1200.jpg?w=400",
    },
    {
      stepId: 3,
      label: "Create an ad",
      Image:
        "https://pokewalls.wordpress.com/wp-content/uploads/2011/01/94gengar1920x1200.jpg?w=400",
    },
  ];

  const theme = useTheme();
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const sectionRef = useRef(null); // Crear referencia
  const isVisible = useScrollPosition(sectionRef); // Usar hook

  return (
    <Container ref={sectionRef}>
      <Fade in={isVisible} sx={{ delay: 1500 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              py: 2,
              display: "flex",
              flexGrow: 1,
            }}
          >
            <Grid item xs={12}>
              <Typography
                fontWeight={"bold"}
                align="center"
                color="primary"
                variant={"h4"}
                mb={2}
              >
                Galería de proyectos
              </Typography>
            </Grid>
            <Grid ref={containerRef} item xs={12} md={6}>
              <Box sx={{ height: { xs: 300, lg: 600 }, width: "100%" }}>
                <Stack
                  display={"flex"}
                  spacing={1}
                  direction={"row"}
                  sx={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ImageSlideBox
                    isChange={activeStep}
                    delay={150}
                    sx={{
                      width: "100%",
                      height: { xs: 200, lg: 500 },
                      objectFit: "cover",
                      alignSelf:
                        activeStep % 2 === 0 ? "flex-start" : "flex-end",
                    }}
                    containerRef={containerRef}
                    direction={"up"}
                    src={steps[activeStep].Image}
                  />
                  <ImageSlideBox
                    isChange={activeStep}
                    delay={300}
                    sx={{
                      width: "100%",
                      height: { xs: 200, lg: 500 },
                      objectFit: "cover",
                      alignSelf:
                        activeStep % 2 === 0 ? "flex-end" : "flex-start",
                    }}
                    containerRef={containerRef}
                    direction={"down"}
                    src={steps[activeStep].Image}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                square
                elevation={0}
                sx={{
                  pl: { xs: 0, lg: 4 },
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  bgcolor: "background.default",
                }}
              >
                <Typography variant={"h5"}>
                  {steps[activeStep].label}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <MobileStepper
            sx={{
              width: "100%",
            }}
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Siguiente
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Anterior
              </Button>
            }
          />
        </Box>
      </Fade>
    </Container>
  );
}

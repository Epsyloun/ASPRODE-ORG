import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ImageBox from "../genericComponents/ImageBox";
import contactanosCTA from "../../assets/ponencia.jpg";

export default function ContactanosCTA() {
  return (
    <Container my={4}>
      <Grid
        container
        spacing={2}
        sx={{
          minHeight: "90svh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            py={4}
            variant="h3"
            fontWeight="bold"
            color="primary.main"
            sx={{
              textAlign: { xs: "center", lg: "left" },
            }}
            gutterBottom
          >
            ¿Quieres saber más sobre ASPRODE?{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              ¡Contáctanos!
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: { xs: "center", lg: "left" } }}
          >
            Si tienes alguna duda, sugerencia o simplemente quieres saber más
            sobre nuestra labor, no dudes en contactarnos. Estamos aquí para
            ayudarte.
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            fontWeight={"bold"}
            sx={{ alignSelf: "flex-start", mt: 2 }}
            gutterBottom
          >
            Haznos cualquier pregunta
          </Typography>
          <Grid
            container
            spacing={2}
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={12}>
              <ul>
                <li>
                  <Typography variant="body1" color="text.secondary">
                    ¿Cómo puedo colaborar con <strong>ASPRODE</strong> en
                    proyectos de ayuda humanitaria?
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" color="text.secondary">
                    ¿Dónde se encuentran las oficinas de{" "}
                    <strong>ASPRODE</strong>?
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" color="text.secondary">
                    ¿Qué tipo de actividades realiza <strong>ASPRODE</strong>{" "}
                    para reducir el riesgo de desastres?
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" color="text.secondary">
                    ¿Qué debo hacer para ser voluntario en{" "}
                    <strong>ASPRODE</strong>?
                  </Typography>
                </li>
                {/* <li>
                  <Typography variant="body1" color="text.secondary">
                    ¿Puedo donar a <strong>ASPRODE</strong> de manera online?
                  </Typography>
                </li> */}
              </ul>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            sx={{
              alignSelf: { xs: "center", lg: "flex-start" },
              mt: 2,
              borderRadius: "50px",
              py: 1,
              px: 4,
              mb: 12,
            }}
          >
            <Typography fontWeight={"bold"} variant="h6">
              Contactanos
            </Typography>
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 2, lg: 0 },
            mb: { xs: 8, lg: 0 },
          }}
        >
          <ImageBox
            src={contactanosCTA}
            alt="Contactanos"
            sx={{
              width: { xs: "80%", lg: "100%" },
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>

      <style>
        {`
      ul li::marker {
        color: #ef7230; /* Cambia el color del bullet */
      }
    `}
      </style>
    </Container>
  );
}

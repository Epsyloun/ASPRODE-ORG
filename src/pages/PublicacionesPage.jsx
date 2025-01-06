import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function PublicacionesPage() {
  return (
    <Box bgcolor={"primary.dark"}>
      <Box
        sx={{
          height: "120px",
        }}
      />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" color="white">
            PublicacionesPage
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="white">
            Somos una asociación sin ánimo de lucro que trabaja para mejorar la
            calidad de vida de las personas con discapacidad intelectual y sus
            familias. Nuestro objetivo es promover la inclusión social y laboral
            de las personas con discapacidad intelectual, fomentando su
            autonomía y participación en la sociedad.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

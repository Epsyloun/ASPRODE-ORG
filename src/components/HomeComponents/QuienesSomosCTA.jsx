import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ImageBox from "../genericComponents/ImageBox";
import quienesSomosCTA from "../../assets/ponencia.jpg";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import InterestsIcon from "@mui/icons-material/Interests";

export default function QuienesSomosCTA() {
  return (
    <Container my={4}>
      <Grid
        container
        spacing={2}
        my={2}
        sx={{
          minHeight: "90vh",
          height: "auto",
          maxHeight: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBox
            src={quienesSomosCTA}
            alt="Quiénes somos"
            sx={{
              width: { xs: "50%", lg: "80%" },
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            mt: { xs: 4, lg: 0 },
          }}
        >
          {/* <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={{ xs: "center", lg: "flex-start" }}>
            <Diversity2Icon sx={{ color: "secondary.main" }} />
            <Typography color="secondary" variant="body1" gutterBottom>
              ONG de cambio social
            </Typography>
          </Stack> */}
          <Typography
            py={4}
            color="primary.main"
            sx={{ textAlign: { xs: "center", lg: "left" } }}
            variant="h3"
            fontWeight={"bold"}
          >
            ¿Quiénes somos?
          </Typography>
          {/* Contenido de quienes somos */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={{ xs: "center", lg: "flex-start" }}
            pb={1}
          >
            <InterestsIcon sx={{ color: "primary.main", fontSize: "40px" }} />
            <Stack direction="column">
              <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
                text numero 1
              </Typography>
              <Typography color="text.secondary" variant="h6" gutterBottom>
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={{ xs: "center", lg: "flex-start" }}
            pb={1}
          >
            <AddReactionIcon sx={{ color: "primary.main", fontSize: "40px" }} />
            <Stack direction="column">
              <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
                text numero 2
              </Typography>
              <Typography color="text.secondary" variant="h6" gutterBottom>
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={{ xs: "center", lg: "flex-start" }}
            pb={4}
          >
            <AddReactionIcon sx={{ color: "primary.main", fontSize: "40px" }} />
            <Stack direction="column">
              <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
                text numero 3
              </Typography>
              <Typography color="text.secondary" variant="h6" gutterBottom>
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent={{
              xs: "center",
              lg: "flex-start",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "50px", py: 1, px: 4, mb: 12 }}
            >
              <Typography fontWeight={"bold"} variant="h6">
                Conócenos
              </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

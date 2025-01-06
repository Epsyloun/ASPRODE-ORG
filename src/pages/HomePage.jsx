import React from "react";
import { Box, Toolbar } from "@mui/material";
import HeroBanner from "../components/HomeComponents/heroBanner";
import QuienesSomosCTA from "../components/HomeComponents/QuienesSomosCTA";
import ProyectosCTA from "../components/HomeComponents/ProyectosCTA";
import CooperacionCTA from "../components/HomeComponents/CooperacionCTA";
import ContactanosCTA from "../components/HomeComponents/ContactanosCTA";

export default function HomePage() {
  return (
    <Box>
      <HeroBanner />
      <QuienesSomosCTA />
      <ProyectosCTA />
      <CooperacionCTA />
      <ContactanosCTA />
    </Box>
  );
}

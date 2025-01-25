import {
  Box,
  Container,
  Fade,
  Grid,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ImageBox from "../genericComponents/ImageBox";
import { useEffect, useRef, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import TypingEffect from "../genericComponents/TypingEffect";

export default function InformativeSection() {
  return (
    <Stack direction={"column"}>
      <InformativeParagraph />
      <ParallaxImage />
    </Stack>
  );
}

const InformativeParagraph = () => {
  const sectionRef = useRef(null); // Crear referencia
  const isVisible = useScrollPosition(sectionRef); // Usar hook
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowText(true);
      console.log("Text is visible", showText);
    }
  }, [isVisible]);

  const text = `Somos una entidad sin ánimo de lucro, que nace en 1998, con el
  objetivo de mejorar la calidad de vida de las personas con discapacidad
  intelectual y sus familias. Nuestra misión es promover la inclusión social y
  laboral de las personas con discapacidad intelectual, a través de la
  prestación de servicios especializados y de calidad, que respondan a sus
  necesidades y expectativas, y que contribuyan a su desarrollo personal y
  profesional.`;

  return (
    <Container ref={sectionRef} sx={{ py: 12 }}>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          lg={1}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        />
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Slide in={isVisible} direction={"right"} timeout={500}>
            <Typography fontWeight={100} variant={"h6"} color="text.secondary">
              Nuestra Misión, compromiso y valores
            </Typography>
          </Slide>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Fade in={isVisible} timeout={1000}>
            <Typography
              mb={2}
              variant={"h3"}
              color={"primary"}
              fontWeight={"bold"}
              sx={{
                textAlign: { xs: "center", lg: "right" },
              }}
            >
              Descubre más sobre nosotros
            </Typography>
          </Fade>
          <TypingEffect text={text} speed={10} variant={"h6"} in={showText} />
        </Grid>
      </Grid>
    </Container>
  );
};

const ParallaxImage = () => {
  const sectionRef = useRef(null); // Crear referencia
  const isVisible = useScrollPosition(sectionRef); // Usar hook
  return (
    <Box ref={sectionRef}>
      <ImageBox
        isVisible={isVisible}
        src={
          "https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=925&format=pjpg&exif=0&iptc=0 1x, https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=1850&format=pjpg&exif=0&iptc=0 2x"
        }
        alt={"Misión de Asprode"}
        sx={{
          width: "100%",
          minHeight: "400px",
          height: "auto",
          maxHeight: "40vh",
          objectFit: "cover",
          mb: 8,
          delay: 500,
        }}
      />
    </Box>
  );
};

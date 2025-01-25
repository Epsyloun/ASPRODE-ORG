import Navbar from "../components/genericComponents/Navbar";
import { ThemeProvider } from "@emotion/react";
import { useThemeHook } from "../hooks/useTheme";
import { createTheme, Stack } from "@mui/material";
import Footer from "../components/genericComponents/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuienesSomosPage from "../pages/QuienesSomosPage";
import ProyectosPage from "../pages/ProyectosPage";
import CooperacionPage from "../pages/CooperacionPage";
import ContactanosPage from "../pages/ContactanosPage";
import PublicacionesPage from "../pages/PublicacionesPage";
import { useEffect } from "react";
function App() {
  const theme = createTheme(useThemeHook());
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomosPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/publicaciones" element={<PublicacionesPage />} />
          <Route path="/cooperacion" element={<CooperacionPage />} />
          <Route path="/contactanos" element={<ContactanosPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ASPRODE-ORG/", // Reemplaza con el nombre exacto de tu repositorio
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "@mui/material/Tooltip"],
  },
  plugins: [react()],
  server: {
    open: true,
  },
});

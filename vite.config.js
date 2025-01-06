import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "@mui/material/Tooltip"],
  },
  plugins: [react()],
  server: {
    open: true,
  },
});

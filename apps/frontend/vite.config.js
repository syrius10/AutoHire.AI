import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // ✅ Ensures React Router handles routing
  },
  build: {
    assetsInlineLimit: 4096,  // Convert small assets to base64
  }
});


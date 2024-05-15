import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      injectRegister: "auto",
    }),
    react(),
  ],
  build: { chunkSizeWarningLimit: 1600 },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});

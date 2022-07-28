// vite.config.js
import svgLoader from "vite-svg-loader";

export default {
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetDir: "./",
  },
  server: {
    host: true,
  },
  plugins: [svgLoader()],
  // opciones de configuración
};

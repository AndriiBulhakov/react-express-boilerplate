import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": "http://localhost:5002",
      "/api/works": {
        target: "http://localhost:5002/api/works",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/works/, ""),
      },
      "/api/categories": {
        target: "http://localhost:5002/api/categories",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/categories/, ""),
      },
      "/api/industries": {
        target: "http://localhost:5002/api/industries",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/industries/, ""),
      },
    },
  },
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("@radix-ui")) return "vendor-radix";
          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            id.includes("react/")
          ) return "vendor-react";
          if (id.includes("@tanstack")) return "vendor-query";
          if (id.includes("lucide-react")) return "vendor-lucide";
          if (id.includes("tsparticles") || id.includes("@tsparticles")) return "vendor-particles";
          if (id.includes("/three/") || id.includes("@react-three")) return "vendor-three";
          if (id.includes("framer-motion")) return "vendor-motion";
          return "vendor";
        },
      },
    },
  },
}));

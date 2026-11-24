import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Port 5176 so it can run alongside other demo apps without clashing.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176,
  },
});

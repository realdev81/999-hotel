import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from "@tailwindcss/vite";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "@" : path.join(__dirname, "src"),
    }
  },
})

import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from '@tailwindcss/vite';
import netlify from "@netlify/vite-plugin";
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    netlify()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",  
  build: {
    outDir: "dist",
    rollupOptions: {
      // input: "./public/index.html", 
    },
  },
  base: "/", // Update this to "/"
})

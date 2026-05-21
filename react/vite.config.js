import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: '/',
    proxy: {
      '/resources': "http://localhost:8080"
    }
  },
  base: '/jakartaee/',
  build: {
    outDir: "../jakartaee/src/main/resources/META-INF/resources"
  }
})
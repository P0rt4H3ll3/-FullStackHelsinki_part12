import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/todos': {
        target: 'http://host.docker.internal:3000', // Use 'backend' as the service name from docker-compose.yml
        changeOrigin: true
      }
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js'
  }
})

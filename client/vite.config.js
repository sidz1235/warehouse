import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

export default {
  server: {
    port: 5173, // specify a port here
    host: '0.0.0.0' // make sure the host is set to '0.0.0.0'
  }
};

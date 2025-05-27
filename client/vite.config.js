import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // 1) listen on 0.0.0.0 so Windows localhost:5173 can reach it
    host: '0.0.0.0',
    port: 5173,

    // 2) use polling to reliably pick up file changes across the mount
    watch: {
      usePolling: true,
      interval: 100,       // you can bump this up if CPU usage is high
    },

    // 3) tell HMR to connect back to localhost:5173 over WS
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
  plugins: [react()],
});

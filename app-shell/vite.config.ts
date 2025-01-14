import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app-shell',
      remotes: {
        'app-menu': 'http://localhost:5001/assets/remoteEntry.js',
        'app-pagos': 'http://localhost:5002/assets/remoteEntry.js',
        'app-dashboard': 'http://localhost:5003/assets/remoteEntry.js',

      },
      shared: ['react','react-dom']
    })
  ],
})

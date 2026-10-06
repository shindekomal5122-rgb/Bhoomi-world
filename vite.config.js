import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Images in public/images are ignored so Vite does not lock them (EBUSY).
      // Restart the dev server after adding a new image there, or it will 404.
      ignored: ["**/public/images/**"],
    },
  },
})

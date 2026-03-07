import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import svgLoader from 'vite-svg-loader'
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), svgLoader()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version)
  },
  server: {
    host: '0.0.0.0'
  },
  preview: {
    allowedHosts: ['jayhu.site']
  }
})

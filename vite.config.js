import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/background': {
        target: 'https://cn.bing.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/background/, '')
      },
      '/server': {
        target: 'https://strapi.jayhu.site/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, '')
      }
    },
    host: '0.0.0.0'
  },
  preview: {
    allowedHosts: ['jayhu.site']
  }
})

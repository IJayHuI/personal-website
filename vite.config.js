import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


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
      },
      '/acg-background': {
        target: 'https://api.vvhan.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/acg-background/, '')
      }
    },
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  preview: {
    allowedHosts: ['jayhu.site']
  }
})

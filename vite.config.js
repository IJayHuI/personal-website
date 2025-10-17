import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version)
  },
  server: {
    proxy: {
      '/background': {
        target: 'https://cn.bing.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/background/, '')
      },
      '/hitokoto': {
        target: 'https://v1.hitokoto.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hitokoto/, '')
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

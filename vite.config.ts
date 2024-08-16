import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		proxy: {
			"/api": {
				target: "https://cn.bing.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, "")
			},
			"/server": {
				target: "http://localhost:3000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/server/, "")
			}
		},
		host: "0.0.0.0"
	}
})

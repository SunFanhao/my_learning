import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  // 跨域代理
  // 线上代理
  server: {
    // 端口号
    port: 8002,
    // 允许端口访问自动打开浏览器
    open: true,
    // 跨域代理
    proxy: {
      '/api': {
        target: 'https://www.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: true
  },
  // 本地接口
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:5000/'
  //   }
  // }
})

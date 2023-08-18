import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // - 開發中、產品路徑
  // - npm run dev 開發者模式
  // - npm run build 生產者模式 (Live Server)
  // - npm rum deploy 生產者模式 (Github)
  base:process.env.NODE_ENV === 'production' ? '/React-simple/' : '/',
  plugins: [react()],
})

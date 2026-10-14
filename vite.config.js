import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const viteBase = process.env.VITE_BASE

export default defineConfig({
  plugins: [react()],
  base: viteBase
    ? viteBase.endsWith('/')
      ? viteBase
      : `${viteBase}/`
    : '/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/HMSS104/", // 👈 MUST match your repo name
  plugins: [react()],
})

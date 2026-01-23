import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs/assets/react',
    lib: {
      entry: 'src/main.jsx',
      name: 'LLMWidget',
      fileName: 'llm-widget',
      formats: ['es']
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'llm-widget.[ext]'
      }
    }
  },
  define: {
    'process.env.VITE_CYVERSE_API_KEY': JSON.stringify(process.env.VITE_CYVERSE_API_KEY)
  }
})
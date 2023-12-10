import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    devtool: 'sourcemap', // controls the generation of source maps
    /*
    Source maps are files that map the generated, minified or transpiled code back to its original source code. 
    Useful during development for debugging process.
    */
  }

  if (command !== 'serve') {
    config.base = '/HRM-App-React/'
  }

  return config
})
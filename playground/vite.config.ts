import { defineConfig } from 'vite'
import vitePluginNotFound from '../src'

export default defineConfig({
  plugins: [
    vitePluginNotFound(),
  ],
})

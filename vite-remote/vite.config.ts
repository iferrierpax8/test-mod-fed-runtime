import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { federation } from '@module-federation/vite';

const config = {
  origin: 'http://localhost:2001',
  port: 2001,
}


// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: config.origin,
    port: config.port,
  },
  base: `${config.origin}/`,
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'vite_remote',
      // filename: 'remoteEntry.js',
      manifest: true,
      exposes: {
        './ViteMFE': './src/main.ts',
      },
      remotes: {
        vue_cli_remote: 'vue_cli_remote@http://localhost:2002/remoteEntry.js',
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

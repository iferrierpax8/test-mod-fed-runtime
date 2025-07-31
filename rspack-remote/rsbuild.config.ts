import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import path from 'path';

const config = {
  port: 2000,
  name: 'rspack_remote',
}

export default defineConfig({
  server: {
    port: config.port,
  },
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: config.name,
      exposes: {
        './RspackMFE': './src/index.ts',
        './RspackHorizontalMFE': './src/HorizontalRspackExpose.ts',
      },
      remotes: {
        vue_cli_remote: 'vue_cli_remote@http://localhost:2002/remoteEntry.js',
        // vite_remote: 'vite_remote@http://localhost:2001/mf-manifest.json',
      },
      manifest: false,
      filename: 'remoteEntry.js',
      runtimePlugins: [path.resolve(__dirname, './custom-runtime-plugin.ts')],
    }),
  ],
});

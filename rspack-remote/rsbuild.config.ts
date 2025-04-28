import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

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
      },
    }),
  ],
});

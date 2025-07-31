const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const { createLoader } = require('@pax8/mfe-core');

const loader = createLoader({
  serviceName: 'vue_cli_host',
});

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.js',
    },
  },
  publicPath: 'auto',
  configureWebpack: {
    devServer: {
      port: 8080,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true,
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'vue_cli_host',
        remotes: {
          vue_cli_remote: loader({
            port: 2002,
            scope: 'vue_cli_remote',
            entryUrl: 'http://localhost:2002/remoteEntry.js',
          }),
          rspack_remote: 'rspack_remote@http://localhost:2000/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
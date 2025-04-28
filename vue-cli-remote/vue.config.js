const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.js',
    },
  },
  publicPath: 'auto',
  configureWebpack: {
    devServer: {
      port: 2002,
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
        name: 'vue_cli_remote',
        filename: 'remoteEntry.js',
        exposes: {
          './VueCliMFE': './src/main.js',
          './HorizontalVueCli': './src/components/HorizontalVueCli.vue',
        },
      }),
    ],
  },
  transpileDependencies: true,
});
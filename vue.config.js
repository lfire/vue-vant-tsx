/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  productionSourceMap: false,
  transpileDependencies: ['vuex-module-decorators'],
  chainWebpack: (config) => {
    config.resolve.alias.set('tslib', 'tslib/tslib.es6.js');
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
      }
      config.plugins.delete('prefetch');
    }
    // config.module
    //   .rule('js')
    //   .exclude.clear()
    //   .add(/node_modules/);
    // config.module.rules.delete('mjs');
    // config.module.rules.store.forEach((rule) => {
    //   console.log(rule.toString(), rule.name, rule.store);
    // });
  },
  configureWebpack: (config) => {
    // config.stats = {
    //   errorDetails: true,
    // };
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            deleteOriginalAssets: false,
          }),
        ],
      };
    }
  },
};

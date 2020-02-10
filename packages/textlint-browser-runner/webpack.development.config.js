const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const path = require('path');
module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['en', 'ja', 'es', 'fr', 'zh-cn', 'zh-hk', 'zh-tw',], // https://github.com/azu/textlint-rule-date-weekday-mismatch/blob/master/src/textlint-rule-date-weekday-mismatch.js#L10
    }),
    new BundleAnalyzerPlugin()
  ]
});
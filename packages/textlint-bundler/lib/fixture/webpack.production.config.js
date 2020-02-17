const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  optimization: {
    minimize: true,
      minimizer: [new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })]
  },
});

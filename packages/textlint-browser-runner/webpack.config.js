const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    'textlint': './browser.js',
  },
  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'entry',
                corejs: 3,
                targets: {
                  ie: '11',
                },
              }]
            ]
          }
        }
      }
    ]
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
};

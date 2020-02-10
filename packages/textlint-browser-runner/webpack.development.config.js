const staticFs = require('babel-plugin-static-fs');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    'textlint': './browser.js',
  },
  output: {
    filename: '[name].bundle.js',
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
            ],
            plugins: [
              ['babel-plugin-static-fs', {
                target: 'browser',
                dynamic: false,
                onFile: onFile,
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['en', 'ja', 'es', 'fr', 'zh-cn', 'zh-hk', 'zh-tw',], // https://github.com/azu/textlint-rule-date-weekday-mismatch/blob/master/src/textlint-rule-date-weekday-mismatch.js#L10
    }),
    new BundleAnalyzerPlugin()
  ]
};
function onFile (file) {
  console.log('Discovered new dependency:', file);
}
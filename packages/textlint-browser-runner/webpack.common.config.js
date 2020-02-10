const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    'textlint': './browser.js',
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
  ]
};
function onFile (file) {
  console.log('Discovered new dependency:', file);
}
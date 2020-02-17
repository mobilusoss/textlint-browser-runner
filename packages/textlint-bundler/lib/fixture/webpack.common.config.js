const path = require('path');
module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, ''),
  entry: {
    'textlint': './index.js',
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
  ]
};
function onFile (file) {
  console.log('Discovered new dependency:', file);
}

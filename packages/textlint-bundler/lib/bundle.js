const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const readPkg = () => {
  const pkgFile = path.resolve(process.cwd(), 'package.json')
  const pkgStr = fs.readFileSync(pkgFile, 'utf-8')
  return JSON.parse(pkgStr)
}

const createWebpackConfig = (preset, debugMode = false) => {
  let webpackConfig
  if (debugMode) {
    webpackConfig = require('./fixture/webpack.development.config');
  } else {
    webpackConfig = require('./fixture/webpack.production.config');
  }
  webpackConfig.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      /@@textlint-preset@@/,
      `textlint-rule-preset-${preset}`
    )
  );
  return webpackConfig;
}

module.exports = (flags, spinner) => {
  const textlint = readPkg().textlint;
  if (!textlint) {
    return Promise.reject('`textlint` is not defined in package.json');
  }
  if (!textlint.preset) {
    return Promise.reject('`textlint.preset` is not defined in package.json');
  }
  const webpackConfig = createWebpackConfig(textlint.preset, flags.debug);
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      spinner.clear();
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(stats);
      }
      return resolve(stats);
    });
  });
}

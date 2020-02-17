const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
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
    const webpackCallback = (err, stats) => {
      spinner.clear();
      if (err) {
        console.error(chalk.bold.red('Error'), err.stack || err);
        console.log(err.details || '');
        return reject('Bundle Error')
      }

      const info = stats.toJson();
      if (stats.hasErrors()) {
        console.error(chalk.bold.red('Error'), 'webpack errors');
        console.log(info.errors.join(""))
        return reject('Bundle stats has errors')
      }

      if (stats.hasWarnings()) {
        console.warn(chalk.keyword('orange')('Warning'), 'webpack warnings');
        console.log(chalk.keyword('gray')(info.warnings.join("")))
      }
      resolve()
    };
    webpack(webpackConfig, webpackCallback);
  });
}

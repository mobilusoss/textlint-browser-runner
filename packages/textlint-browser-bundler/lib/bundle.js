import webpack from 'webpack';
import packageJson from './package.json';
export default (flags) => {
  const textlint = packageJson.textlint;
  if (!textlint) {
    return Promise.reject('textlint is not defined in package.json');
  }
  if (!textlint.preset) {
    return Promise.reject('textlint.preset is not defined in package.json');
  }
  const preset = textlint.preset;
  const debugMode = flags.debug;
  let webpackConfig
  if (debugMode) {
    webpackConfig = require('./fixture/webpack.development.config');
  } else {
    webpackConfig = require('./fixture/webpack.production.config');
  }
  webpackConfig.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      '@@textlint-preset@@',
      preset
    )
  );
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => { // Stats Object
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        reject('Bundle Error')
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
      resolve()
    });
  });
}

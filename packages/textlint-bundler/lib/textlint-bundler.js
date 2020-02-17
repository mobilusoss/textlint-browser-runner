#!/usr/bin/env node
const chalk = require('chalk');
const ora = require('ora');
const meow = require('meow');
const bundle = require('./bundle');

const run = () => {
  const cli = meow(`
    Usage
      1. Install preset what you want to bundle
        $ npm insall textlint-rule-preset-xxxxx

      2. Update \`textlint.preset\` in your \`package.json\`
        Ex:
        \`
          textlint: {
            preset: 'japanese
          }
        \`

      3. run
        $ textlint-bundler

      bundled file and example will be created in \`dist\` directory

    Options
      --debug, -d Bundle with debug option

`, {
    flags: {
      debug: {
        type: 'boolean',
        alias: 'd'
      }
    }
  });
  console.log(chalk.bold.white('Start Bundling...'))
  const spinner = ora().start();
  bundle(cli.flags, spinner)
  .then((stats) => {
    if (stats.hasWarnings()) {
      const info = stats.toJson();
      console.warn(chalk.keyword('orange')('Warning'), 'webpack warnings');
      console.log(chalk.keyword('gray')(info.warnings.join("")));
    }
    console.log(chalk.bold.green('Success'));
    console.log("Run `npx http-server ./dist -o /example.html` to see example");
  })
  .catch((reason) => {
    if (typeof reason.hasErrors === 'function' ) {
      console.error(chalk.bold.red('Error'), 'webpack errors');
      const info = reason.toJson();
      console.log(info.errors.join(""));
    } else {
      console.error(chalk.bold.red('Error'), reason.stack || reason);
      console.log(reason.details || '');
    }
  })
  .finally(() => {
    spinner.stop();
  })
}
module.exports = {run}
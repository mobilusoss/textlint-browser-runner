#!/usr/bin/env node

'use strict';
const meow = require('meow');
const bundle = require('./bundle');

export const run = () => {
  const cli = meow(`
    Usage
      $ textlint-browser-bundler

    Options
      --debug, -d Bundle with debug option

    Examples
      $ textlint-browser-bundler
`, {
    flags: {
      debug: {
        type: 'boolean',
        alias: 'd'
      }
    }
  });
  bundle(cli.flags)
}

# `textlint-bundler`

Bundle [textlint](https://github.com/textlint/textlint "textlint") and some [preset](https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule#rule-preset-list) for browser.

## Usage

1. `$ npm init`

2. Chose or [Create](https://textlint.github.io/docs/rule-preset.html) preset.

    `$ npm install textlint-rule-preset-xxxx`

4. Update `package.json` with `textlint.preset` directive
    ```
    "textlint": {
      "preset" : "xxxx"
    }
    ```

5. Install `textlint-bundler` and run. (Can not run via `npx` See #36)

    ```
    $ npm install textlint-bundler --save-dev
    $ node_modules/.bin/textlint-bundler
    ```
6. Try it on browser

    `$ npx http-server ./dist -o /example.html`
# `textlint-bundler`

Bundle [textlint](https://github.com/textlint/textlint "textlint") and some [preset](https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule#rule-preset-list) for browser.

## Usage

1. Chose or [Create](https://textlint.github.io/docs/rule-preset.html) preset.
2. `$ npm init`
3. `$ npm install textlint-rule-preset-xxxx`
4. Update `package.json` with `textlint.preset` directive
    ```
      "textlint": {
        "preset" : "xxxx"
      }
    ```
5. `$ npx textlint-bundler`
6. `$ npx http-server ./dist -o /example.html`
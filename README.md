# textlint-browser-runner
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Node.js CI](https://github.com/mobilusoss/textlint-browser-runner/workflows/Node.js%20CI/badge.svg)](https://github.com/mobilusoss/textlint-browser-runner/actions?query=workflow%3A%22Node.js+CI%22)
[![Build Status](https://travis-ci.com/mobilusoss/textlint-browser-runner.svg?branch=master)](https://travis-ci.com/mobilusoss/textlint-browser-runner)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmobilusoss%2Ftextlint-browser-runner.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmobilusoss%2Ftextlint-browser-runner?ref=badge_shield)
[![codebeat badge](https://codebeat.co/badges/7d36c660-3695-47cd-b0a8-d8490200f6f9)](https://codebeat.co/projects/github-com-mobilusoss-textlint-browser-runner-master)

[textlint](https://github.com/textlint/textlint "textlint") for browser bundled with Japanese [preset rules](https://www.npmjs.com/package/textlint-rule-preset-mobilus).

## Packages

- [textlint-browser-runner](https://www.npmjs.com/package/textlint-browser-runner)

- [textlint-rule-preset-mobilus](https://www.npmjs.com/package/textlint-rule-preset-mobilus)

- [kuromojin-external-dict-loader](https://github.com/mobilusoss/textlint-browser-runner/tree/master/packages/kuromojin-external-dict-loader)

## Downloads

- [textlint.bundle.min.js](https://mobilusoss.github.io/textlint-browser-runner/downloads/textlint.bundle.min.js)
- [kuromojin-external-dict-loader.js](https://mobilusoss.github.io/textlint-browser-runner/downloads/kuromojin-external-dict-loader.js)

## Usage

```
<script>
window.kuromojin = {
  dicPath: "https://some_external_cdn_url/dict"
};
</script>
<script src="/path/to/kuromojin-external-dict-loader.js"></script>
<script src="/path/to/textlint.bundle.min.js"></script>
<script>
  var linter = new Textlint(options);
  linter.lintText('お刺身が食べれない').then(console.log).catch(console.log)
</script>
```

## Demo

Try [here](https://mobilusoss.github.io/textlint-browser-runner/demo.html).

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmobilusoss%2Ftextlint-browser-runner.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmobilusoss%2Ftextlint-browser-runner?ref=badge_large)

# `textlint-browser-runner`

[textlint](https://github.com/textlint/textlint "textlint") with bundled [preset](https://www.npmjs.com/package/textlint-rule-preset-mobilus) rules for browser

## Usage

```
window.kuromojin = {
  dicPath: "./dict/"
};
var linter = new Textlint(options);
linter.lintText('お刺身が食べれない').then(console.log).catch(console.log)
```

## Options

You can set rule option with each `ruleId` similar to `.textlintrc`



Default:
```
{
  "max-ten": {
      "max": 3
  },
  "no-doubled-conjunctive-particle-ga": true,
  "no-doubled-conjunction": true,
  "no-double-negative-ja": true,
  "no-doubled-joshi": {
      "min_interval": 1
  },
  "sentence-length": {
      "max": 100
  },
  "no-dropping-the-ra": true,
  "no-mix-dearu-desumasu": true,
  "no-nfd": true,
  "no-invalid-control-character": true,
  "date-weekday-mismatch": true,
  "ja-hiragana-hojodoushi": true,
  "ja-hiragana-keishikimeishi": true,
  "ja-no-mixed-period": true,
  "ja-no-redundant-expression": true,
  "ja-no-weak-phrase": true,
  "ja-unnatural-alphabet": true,
  "max-comma": true,
  "max-kanji-continuous-len": true,
  "max-number-of-lines": true,
  "ng-word": true,
  "no-exclamation-question-mark": true,
  "no-hankaku-kana": true,
  "no-insert-dropping-sa": true,
  "no-mixed-zenkaku-and-hankaku-alphabet": true,
  "no-start-duplicated-conjunction": true,
  "no-unmatched-pair": true,
  "prefer-tari-tari": true,
}
```

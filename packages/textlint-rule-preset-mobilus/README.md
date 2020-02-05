# textlint-rule-preset-mobilus

[textlint rule preset](https://github.com/textlint/textlint/blob/master/docs/rule-preset.md "preset") for Mobilus.

Mobilus向けのtextlint ruleのpresetです。

[textlint-ja/textlint-rule-preset-ja](https://github.com/textlint-ja/textlint-rule-preset-ja)に加えていくつかのルールを追加しています。

Webブラウザ上で日本語入力に対してtextlintを動作させることを主な目的としています。

そのため、`fs` にアクセスするようなルールは含まれていません。

## Installation

```
npm install textlint-rule-preset-mobilus
```

このpresetは以下のルールを含んでいます。ルールの詳細は各リンク先を確認してください

- [textlint-rule-date-weekday-mismatch](https://www.npmjs.com/package/textlint-rule-date-weekday-mismatch)
- [textlint-rule-ja-hiragana-keishikimeishi](https://www.npmjs.com/package/textlint-rule-ja-hiragana-keishikimeishi)
- [textlint-rule-ja-no-mixed-period](https://www.npmjs.com/package/textlint-rule-ja-no-mixed-period)
- [textlint-rule-ja-no-redundant-expression](https://www.npmjs.com/package/textlint-rule-ja-no-redundant-expression)
- [textlint-rule-ja-no-weak-phrase](https://www.npmjs.com/package/textlint-rule-ja-no-weak-phrase)
- [textlint-rule-ja-unnatural-alphabet](https://www.npmjs.com/package/textlint-rule-ja-unnatural-alphabet)
- [textlint-rule-max-comma](https://www.npmjs.com/package/textlint-rule-max-comma)
- [textlint-rule-max-kanji-continuous-len](https://www.npmjs.com/package/textlint-rule-max-kanji-continuous-len)
- [textlint-rule-max-number-of-lines](https://www.npmjs.com/package/textlint-rule-max-number-of-lines)
- [textlint-rule-ng-word](https://www.npmjs.com/package/textlint-rule-ng-word)
- [textlint-rule-no-exclamation-question-mark](https://www.npmjs.com/package/textlint-rule-no-exclamation-question-mark)
- [textlint-rule-no-hankaku-kana](https://www.npmjs.com/package/textlint-rule-no-hankaku-kana)
- [textlint-rule-no-insert-dropping-sa](https://www.npmjs.com/package/@textlint-ja/textlint-rule-no-insert-dropping-sa)
- [textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet](https://www.npmjs.com/package/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet)
- [textlint-rule-no-start-duplicated-conjunction](https://www.npmjs.com/package/textlint-rule-no-start-duplicated-conjunction)
- [textlint-rule-no-unmatched-pair](https://www.npmjs.com/package/@textlint-rule/textlint-rule-no-unmatched-pair)
- [textlint-rule-prefer-tari-tari](https://www.npmjs.com/package/textlint-rule-prefer-tari-tari)
- [textlint-ja/textlint-rule-preset-ja](https://github.com/textlint-ja/textlint-rule-preset-ja)
  - [textlint-rule-max-ten](https://www.npmjs.com/package/textlint-rule-max-ten)
  - [textlint-rule-no-doubled-conjunctive-particle-ga](https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga)
  - [textlint-rule-no-doubled-conjunction](https://github.com/takahashim/textlint-rule-no-doubled-conjunction)
  - [textlint-rule-no-double-negative-ja](https://github.com/textlint-ja/textlint-rule-no-double-negative-ja)
  - [textlint-rule-no-doubled-joshi](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi)
  - [textlint-rule-sentence-length](https://github.com/azu/textlint-rule-sentence-length)
  - [textlint-rule-no-dropping-the-ra](https://github.com/azu/textlint-rule-no-dropping-the-ra)
  - [textlint-rule-no-mix-dearu-desumasu](https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu)
  - [textlint-rule-no-nfd](https://github.com/azu/textlint-rule-no-nfd)
  - [textlint-rule-no-invalid-control-character](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character)

## Usage

Via `.textlintrc`

```json5
{
    "rules": {
        "preset-mobilus": true
    }
}
```

Via CLI

```
textlint --preset mobilus README.md
```


Options

[textlint-ja/textlint-rule-preset-ja](https://github.com/textlint-ja/textlint-rule-preset-ja) および 各ルールのデフォルト値に準拠します。

オプションを指定する場合、`rules.preset-mobilus` 以下に、ルール名(パッケージ名から`textlint-rule-`を省いたもの)を指定します。

```json5
{
    "rules": {
        // それぞれのルールのデフォルト値
        "preset-mobilus": {
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
            "ja-hiragana-keishikimeishi": true,
            "ja-no-abusage": true,
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
    }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

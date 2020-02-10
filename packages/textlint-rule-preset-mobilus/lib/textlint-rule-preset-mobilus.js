const assign = require("object-assign");
const preset = require("textlint-rule-preset-japanese");
const { moduleInterop } = require("@textlint/module-interop");

const rules = assign({}, preset.rules, {
  "date-weekday-mismatch": moduleInterop(
    require("textlint-rule-date-weekday-mismatch")
  ),
  "ja-hiragana-hojodoushi": moduleInterop(
    require("textlint-rule-ja-hiragana-hojodoushi")
  ),
  "ja-hiragana-keishikimeishi": moduleInterop(
    require("textlint-rule-ja-hiragana-keishikimeishi")
  ),

  "ja-no-mixed-period": moduleInterop(
    require("textlint-rule-ja-no-mixed-period")
  ),
  "ja-no-redundant-expression": moduleInterop(
    require("textlint-rule-ja-no-redundant-expression")
  ),
  "ja-no-weak-phrase": moduleInterop(
    require("textlint-rule-ja-no-weak-phrase")
  ),
  "ja-unnatural-alphabet": moduleInterop(
    require("textlint-rule-ja-unnatural-alphabet")
  ),
  "max-comma": moduleInterop(require("textlint-rule-max-comma")),
  "max-kanji-continuous-len": moduleInterop(
    require("textlint-rule-max-kanji-continuous-len")
  ),
  "max-number-of-lines": moduleInterop(
    require("textlint-rule-max-number-of-lines")
  ),
  "max-ten": moduleInterop(require("textlint-rule-max-ten")),
  "ng-word": moduleInterop(require("textlint-rule-ng-word")),
  "no-exclamation-question-mark": moduleInterop(
    require("textlint-rule-no-exclamation-question-mark")
  ),
  "no-hankaku-kana": moduleInterop(require("textlint-rule-no-hankaku-kana")),
  "no-insert-dropping-sa": moduleInterop(
    require("@textlint-ja/textlint-rule-no-insert-dropping-sa")
  ),
  "no-mixed-zenkaku-and-hankaku-alphabet": moduleInterop(
    require("textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet")
  ),
  "no-start-duplicated-conjunction": moduleInterop(
    require("textlint-rule-no-start-duplicated-conjunction")
  ),
  "no-unmatched-pair": moduleInterop(
    require("@textlint-rule/textlint-rule-no-unmatched-pair")
  ),
  "prefer-tari-tari": moduleInterop(require("textlint-rule-prefer-tari-tari"))
});

const rulesConfig = assign({}, preset.rulesConfig, {
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
  "max-ten": true,
  "ng-word": true,
  "no-exclamation-question-mark": true,
  "no-hankaku-kana": true,
  "no-insert-dropping-sa": true,
  "no-mixed-zenkaku-and-hankaku-alphabet": true,
  "no-start-duplicated-conjunction": true,
  "no-unmatched-pair": true,
  "prefer-tari-tari": true
});

module.exports = {
  rules,
  rulesConfig
};

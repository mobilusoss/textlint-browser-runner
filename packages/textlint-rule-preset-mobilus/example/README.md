# README

これは例文です。

---

- [textlint-rule-date-weekday-mismatch](https://www.npmjs.com/package/textlint-rule-date-weekday-mismatch)
  - OK: 2016-12-29(Thursday)
  - NG: 2016-12-29(Friday)

- [textlint-rule-ja-hiragana-keishikimeishi](https://www.npmjs.com/package/textlint-rule-ja-hiragana-keishikimeishi)
  - OK: textlintをする上で
  - NG: textlintをするうえで

- [https://www.npmjs.com/package/textlint-rule-ja-no-mixed-period](https://www.npmjs.com/package/textlint-rule-ja-no-mixed-period)
  - OK: これは問題ない文章です。
  - NG: これは問題ある文章です

- [textlint-rule-ja-no-redundant-expression](https://www.npmjs.com/package/textlint-rule-ja-no-redundant-expression)
  - OK: textlintは便利です
  - NG: textlintは便利であると言えます

- [textlint-rule-ja-no-weak-phrase](https://www.npmjs.com/package/textlint-rule-ja-no-weak-phrase)
  - OK: 問題がある。
  - NG: 問題があるかもしれない。

- [textlint-rule-ja-unnatural-alphabet](https://www.npmjs.com/package/textlint-rule-ja-unnatural-alphabet)
  - OK: 対応できない
  - NG: 対応でｋない

- [textlint-rule-max-comma](https://www.npmjs.com/package/textlint-rule-max-comma)
  - OK: カンマの数は,4つ以内のルール。
  - NG: カンマの,数が,5つ,以上,あります,ね。

- [textlint-rule-max-kanji-continuous-len](https://www.npmjs.com/package/textlint-rule-max-kanji-continuous-len)
  - OK: 一二三四五
  - NG: 一二三四五六

- [textlint-rule-ng-word](https://www.npmjs.com/package/textlint-rule-ng-word)
  - OK: .textlintrcにスイカはngword登録されていない
  - NG: .textlintrcにりんごはngword登録されている

- [textlint-rule-no-exclamation-question-mark](https://www.npmjs.com/package/textlint-rule-no-exclamation-question-mark)
  - OK: クエスチョンマークは使ってはいけない。
  - NG: ?は使ってはいけない。
  - NG: ？は使ってはいけない。

- [textlint-rule-no-hankaku-kana](https://www.npmjs.com/package/textlint-rule-no-hankaku-kana)
  - OK: 半角カナは使っていません。
  - NG: 半角ｶﾅを使っています。

- [@textlint-ja/textlint-rule-no-insert-dropping-sa](https://www.npmjs.com/package/@textlint-ja/textlint-rule-no-insert-dropping-sa)
  - OK: 今日は暖かさそう。
  - NG: 刺し身をたべたさそう。

- [textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet]https://www.npmjs.com/package/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet
  - OK: ABCは半角
  - NG: ＡＢＣは全角

- [textlint-rule-no-start-duplicated-conjunction](https://www.npmjs.com/package/textlint-rule-no-start-duplicated-conjunction)
  - だが、これはOK
  - しかし、これはOK
  - だが、ここでNG

- [textlint-rule-no-unmatched-pair](https://www.npmjs.com/package/@textlint-rule/textlint-rule-no-unmatched-pair)
  - OK: これは(秘密)です。
  - OK: John said "Hello World".
  - NG: これは（秘密)です。
  - NG: John said "Hello World'.

- [textlint-rule-prefer-tari-tari](https://www.npmjs.com/package/textlint-rule-prefer-tari-tari)
  - OK: プログラムを書いたり、文章を書いたりしている
  - NG: プログラムを書いたり、文章を書いている

- [textlint-rule-max-ten](https://www.npmjs.com/package/textlint-rule-max-ten)
  - OK: 句点の数は、3つ以内のルール。
  - NG: 句点の、数が、3つ以上、あります、ね。

- [textlint-rule-no-doubled-conjunctive-particle-ga](https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga)
  - OK: 今日は早朝から出発したが、定刻には間に合わなかった。が、無事会場に到着した。
  - NG: 今日は早朝から出発したが、定刻には間に合わなかったが、無事会場に到着した。

- [textlint-rule-no-doubled-conjunction](https://github.com/takahashim/textlint-rule-no-doubled-conjunction)
  - OK: かな漢字変換により漢字は多用される傾向がある。しかし漢字の多用が読みにくさをもたらす側面は否定できない。だが、平仮名が多い文は間延びした印象を与える恐れもある。
  - NG: かな漢字変換により漢字は多用される傾向がある。しかし漢字の多用が読みにくさをもたらす側面は否定できない。しかし、平仮名が多い文は間延びした印象を与える恐れもある。

- [textlint-rule-no-doubled-joshi](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi)
  - OK: 私は彼が好きだ
  - NG: 私は彼は好きだ

- [textlint-rule-sentence-length](https://www.npmjs.com/package/textlint-rule-sentence-length)
  - OK: 100文字でOK1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901
  - NG: 101文字でNG12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012

- [textlint-rule-no-dropping-the-ra](https://github.com/azu/textlint-rule-no-dropping-the-ra)
  - OK: お刺身が食べられない
  - NG: お刺身が食べれない

- [textlint-rule-no-mix-dearu-desumasu](https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu)
  - OK: 昨日はいい天気であったが、今日は雨です。
  - NG: 今日はいい天気である。明日も晴れです。

- [textlint-rule-no-nfd](https://github.com/azu/textlint-rule-no-nfd)
  - OK: ポケット
  - NG: ホ゜ケット

- [textlint-rule-no-invalid-control-character](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character)
  - OK: "new line \n"
  - NG: �(\u0010 DATA LINK ESCAPE)

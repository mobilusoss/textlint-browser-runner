# `kuromojin-external-dict-loader`

XMLHttpRequest monkey patch for [kuromoji issue](https://github.com/takuyaa/kuromoji.js/issues/37)

## Usage

```
window.kuromojin = {
  dicPath: "https://some_external_cdn_url/dict"
};
<script src="/path/to/kuromojin-external-dict-loader.js"></script>
<script>
  getTokenizer();
</script>
```

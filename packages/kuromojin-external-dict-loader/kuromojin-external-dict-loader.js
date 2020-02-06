'use strict';
// https://github.com/takuyaa/kuromoji.js/issues/37
// Enable to load kuromoji dict from external url
(function kuromojinExternalDictLoader() {
    if (typeof window.kuromojin !== 'object') return;
    if (typeof window.kuromojin.dicPath !== 'string') return;
    var dicPath = window.kuromojin.dicPath;
    if (/https?:\/\//.test(dicPath)) {
        var dicPathWithoutDoubleSlash = dicPath.replace('://', ':/');
        XMLHttpRequest.prototype.patched_open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, bool){
          if (url.indexOf(dicPathWithoutDoubleSlash) === 0) {
            this.patched_open(method, url.replace(dicPathWithoutDoubleSlash, dicPath), bool);
          } else {
            this.patched_open(method, url, bool);
          }
        };
    }
})();

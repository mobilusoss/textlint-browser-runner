const sinon = require('sinon');
const assert = require('assert');
window.kuromojin = {
  dicPath: '/dict'
}
require('../kuromojin-external-dict-loader.js');

const doXhr = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
}

describe('kuromojin-external-dict-loader without external dicPath option', () => {
  let xhr;
  beforeEach(() => {
    sinon.stub(XMLHttpRequest.prototype, 'patched_open')
  })
  afterEach(() => {
    XMLHttpRequest.prototype.patched_open.restore();
  })
  it('will not override request when url is not match with normalized double slash dicPath', () => {
    doXhr('http:/localhost:8888/dict')
    assert(XMLHttpRequest.prototype.patched_open.getCall(0).args[1], 'http:/localhost:8888/dict')
    doXhr('http://localhost:9999/dict')
    assert(XMLHttpRequest.prototype.patched_open.getCall(0).args[1], 'http://localhost:9999/dict')
  });
});

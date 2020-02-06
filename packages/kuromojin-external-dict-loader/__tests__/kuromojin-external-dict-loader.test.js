
// load kuromojin-option1.js in karma
// window.kuromojin = {
//   dicPath: 'http://localhost:9999/dict'
// }

describe('kuromojin-external-dict-loader with external dicPath option', () => {
  const doXhr = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
  }
  beforeEach(() => {
    sinon.stub(XMLHttpRequest.prototype, 'patched_open')
  })
  afterEach(() => {
    XMLHttpRequest.prototype.patched_open.restore();
  })
  it('will override request when url is match with normalized double slash dicPath', () => {
    doXhr('http:/localhost:9999/dict')
    assert(XMLHttpRequest.prototype.patched_open.getCall(0).args[1], 'http://localhost:9999/dict')
  });
  it('will not override request when url is not match with normalized double slash dicPath', () => {
    doXhr('http:/localhost:8888/dict')
    assert(XMLHttpRequest.prototype.patched_open.getCall(0).args[1], 'http:/localhost:8888/dict')
    doXhr('http://localhost:9999/dict')
    assert(XMLHttpRequest.prototype.patched_open.getCall(0).args[1], 'http://localhost:9999/dict')
  });
});

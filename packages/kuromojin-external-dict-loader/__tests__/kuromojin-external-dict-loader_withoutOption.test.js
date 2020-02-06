
// load kuromojin-option2.js in karma
// window.kuromojin = {
//   dicPath: '/dict'
// }

describe('kuromojin-external-dict-loader without external dicPath option', () => {
  const doXhr = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
  }
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

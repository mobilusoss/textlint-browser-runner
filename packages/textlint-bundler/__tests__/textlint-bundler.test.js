const assert = require("assert");
const textlintBundler = require('../lib/textlint-bundler');

describe('textlint-bundler', () => {
    it('should have run function', () => {
        assert(typeof textlintBundler.run, 'function')
    });
});

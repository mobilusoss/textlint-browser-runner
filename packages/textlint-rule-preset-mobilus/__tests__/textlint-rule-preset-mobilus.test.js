const assert = require("assert");
const rules = require("../lib/textlint-rule-preset-mobilus").rules;
const rulesConfig = require("../lib/textlint-rule-preset-mobilus").rulesConfig;
describe("textlint-rule-preset-mobilus", function() {
  it("not missing key", function() {
    const ruleKeys = Object.keys(rules).sort();
    const ruleConfigKeys = Object.keys(rulesConfig).sort();
    assert.deepEqual(ruleKeys, ruleConfigKeys);
  });
});

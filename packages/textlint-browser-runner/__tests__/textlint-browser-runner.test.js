'use strict';
import assert from 'assert';
import sinon from 'sinon';
import {
    TextlintKernel,
  } from '@textlint/kernel'
import preset from 'textlint-rule-preset-mobilus';

import Linter from '../';

describe('textlint-browser-runner', () => {
    it('will export constructor', () => {
        assert(typeof Linter, 'function')
    });
    describe('test of instance', () => {
        describe('without option', () => {
            let linter;
            before(() => {
                sinon.stub(TextlintKernel.prototype, 'lintText')
                linter = new Linter();
            })
            after(() => {
                TextlintKernel.prototype.lintText.restore();
            })
            describe('when instance is constructed', () => {
                let args;
                it('will call TextlintKernel.lintText silently', () => {
                    assert(TextlintKernel.prototype.lintText.calledOnce, true);
                    args = TextlintKernel.prototype.lintText.getCall(0).args;
                });
                it('will be called with "dummy" text', () => {
                    assert(args[0], 'dummy');
                })
                it('will be called with kernel option from presets default', () => {
                    const ruleIds = Object.keys(preset.rules).sort();
                    assert(args[1].rules.map(rule => rule.ruleId).sort(), ruleIds);
                });
            })
            describe('when instance.lintText is called', () => {
                let args;
                before(() => {
                    linter.lintText('test text')
                })
                it('will call TextlintKernel.lintText', () => {
                    assert(TextlintKernel.prototype.lintText.calledTwice, true);
                    args = TextlintKernel.prototype.lintText.getCall(1).args;
                });
                it('will be called with text', () => {
                    assert(args[0], 'test text');
                })
                it('will be called with kernel option from presets default', () => {
                    const ruleIds = Object.keys(preset.rules).sort();
                    assert(args[1].rules.map(rule => rule.ruleId).sort(), ruleIds);
                });
            })
        })
        describe('with option', () => {
            let linter;
            const option = {
                'no-doubled-conjunctive-particle-ga': false,
                'max-ten': {
                    max: 10,
                }
            }
            before(() => {
                sinon.stub(TextlintKernel.prototype, 'lintText')
                linter = new Linter(option);
            })
            after(() => {
                TextlintKernel.prototype.lintText.restore();
            })
            describe('when instance is constructed', () => {
                let args;
                it('will call TextlintKernel.lintText silently', () => {
                    assert(TextlintKernel.prototype.lintText.calledOnce, true);
                    args = TextlintKernel.prototype.lintText.getCall(0).args;
                });
                it('will be called with "dummy" text', () => {
                    assert(args[0], 'dummy');
                })
                it('will be called with kernel option except disabled rule', () => {
                    assert(args[1].rules.map(rule => rule.ruleId).indexOf('no-doubled-conjunctive-particle-ga'), -1);
                })
                it('will be called with kernel option override by user options ', () => {
                    assert(args[1].rules.find(rule => rule.ruleId === 'max-ten').options.max, 10);
                });
            })
            describe('when instance.lintText is called', () => {
                let args;
                before(() => {
                    linter.lintText('test text')
                })
                it('will call TextlintKernel.lintText', () => {
                    assert(TextlintKernel.prototype.lintText.calledTwice, true);
                    args = TextlintKernel.prototype.lintText.getCall(1).args;
                });
                it('will be called with text', () => {
                    assert(args[0], 'test text');
                })
                it('will be called with kernel option except disabled rule', () => {
                    assert(args[1].rules.map(rule => rule.ruleId).indexOf('no-doubled-conjunctive-particle-ga'), -1);
                })
                it('will be called with kernel option override by user options ', () => {
                    assert(args[1].rules.find(rule => rule.ruleId === 'max-ten').options.max, 10);
                });
            })
        })
    })
});

require('file-loader?name=[name].[ext]!./example.html');
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {
  TextlintKernel,
} from '@textlint/kernel'
import preset from '@@textlint-preset@@'

class Linter {
  constructor(ruleOptions = {}) {
    this.kernel = new TextlintKernel();
    this.ruleOptions = ruleOptions;

    this.kernelOptions = {
      ext: '.txt',
      plugins: [{
        pluginId: 'text',
        plugin: require('@textlint/textlint-plugin-text')
      }],
      rules: Object.keys(preset.rules || {}).reduce((acc, key) => {
        if (ruleOptions[key] !== false) {
          acc.push({
            ruleId: key,
            rule: preset.rules[key],
            options: Object.assign({}, preset.rulesConfig[key],  ruleOptions[key] || {})
          })
        }
        return acc;
      }, []),
    }
    // initialize kuromojin
    this.kernel.lintText('dummy', this.kernelOptions)
  }
  /**
   * lint text by registered rules.
   * The result contains target filePath and error messages.
   * @param {string} text
   * @returns {Promise.<TextlintResult>}
   */
  lintText(text) {
    return this.kernel.lintText(text, this.kernelOptions);
  }
}
window.Textlint = Linter;

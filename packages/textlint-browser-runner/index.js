import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Linter from './lib/textlint-browser-runner';
if (typeof window !== 'undefined') {
  window.Textlint = Linter;
} else {
  module.exports = Linter;
}
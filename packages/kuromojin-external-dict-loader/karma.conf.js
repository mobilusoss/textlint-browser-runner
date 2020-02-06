// Karma configuration
// Generated on Thu Feb 06 2020 13:53:44 GMT+0900 (GMT+09:00)

const files1 = [
  '__tests__/kuromojin-option1.js',
  './kuromojin-external-dict-loader.js',
  '__tests__/kuromojin-external-dict-loader.test.js'
];
const files2 = [
  '__tests__/kuromojin-option2.js',
  './kuromojin-external-dict-loader.js',
  '__tests__/kuromojin-external-dict-loader_withoutOption.test.js'
]
const TEST_TARGETS = [
  files1,
  files2
]

const target = process.env.KARMA_TARGET || 0;
const files = TEST_TARGETS[target];

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: files,


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

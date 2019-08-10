"use strict";

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,

    capabilities: {
        browserName: 'firefox'
    },

    specs: [
        'tmp/**/*.spec.js'
    ],

    jasmineNodeOpts: {
        showColors: true,
        print: function () { }
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};
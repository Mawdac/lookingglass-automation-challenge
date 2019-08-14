"use strict";

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let HtmlReporter = require('protractor-beautiful-reporter');

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
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/report',
            docTitle: 'LookingGlass Automation Suite',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            clientDefaults: {
                searchSettings: {
                    allselected: true,
                },
                columnSettings: {
                    displayTime: true,
                    displayBrowser: false,
                    displaySessionId: false,
                    displayOS: false,
                    inlineScreenshots: true
                }
            }
        }).getJasmine2Reporter());
    }
};
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    capabilities: {
        browserName: 'chrome'
    },

    specs: ['test.spec.js'],

    jasmineNodeOpts: {
        showColors: true,
    }
};
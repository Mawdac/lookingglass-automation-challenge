# LookingGlass Automation Challenge

## Setup

Prerequisites:

- You must have [node](https://nodejs.org/en/download/) and [git](https://git-scm.com/downloads) already installed to complete the setup.
- You also need chrome and firefox installed to execute the test.

Setting up the project is simple and these steps apply to any platform (Linux, Windows or Mac OS):

1. Clone it
2. Run `npm install` - this installs all project dependencies
3. Run `npm run wdupdate` - this downloads the needed chrome/firefox webdrivers

---

## Running the test

The test is configured to run through npm's default test command, so all you need to do is open a terminal in the project folder and run: 
```bash
npm test
```

Running `npm test` also runs the following npm scripts via pre-hooks:

```json
"clean": "rm -rf tmp", // only works on Unix
"tsc": "tsc", // compiles TypeScript files to JavaScript
"pretest": "npm run clean && npm run tsc", // run both scripts above before test
"test": "protractor ./protractor.conf.js", // run the tests
```

To switch between chrome and firefox, simply update the `protractor.conf.js` in the root of the project like-so:

Chrome: 

```javascript
capabilities: {
    browserName: 'chrome'
},
```

Firefox:
```javascript
capabilities: {
    browserName: 'firefox'
},
```

---

## Test Results

Test results can be viewed in 2 ways:

1. The terminal output
2. The HTML screenshot report
   - Located under tmp/report after executing a test
   - Open index.html in a browser to view the report
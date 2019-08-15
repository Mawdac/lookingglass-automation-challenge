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

## Running Tests

There are 2 tests in this automation suite: `test1.spec.ts` and `test2.spec.ts`

> `test1.spec.ts` is the hackerrank automation challenge original test case.

> `test2.spec.ts` uses the same functionality from test 1 except it adds different products and uses many of the same page-object functions.

The tests are configured to run through npm's default test command, so all you need to do is open a terminal in the project folder and run: 
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

Granted there are no issues with setup/running the tests, the tests should pass without an issue. To see how the tests might look when they fail, simply update any of the assertions on the SummaryPage.

1. Go to `page-objects` > `summaryPage.ts`
2. Update any of the assertions so that it fails (assertions on lines 49, 52, 96, 97 and 98). Example:
```javascript
// line 96 - before
await expect(calculatedTotalProduct).toEqual(totalProduct, calculatedTotalProduct + " is expected to equal " + totalProduct);
// line 96 - after
await expect(calculatedTotalProduct).toEqual(2, calculatedTotalProduct + " is expected to equal " + 2);
```
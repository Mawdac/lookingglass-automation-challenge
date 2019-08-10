# LookingGlass Automation Challenge

## Setup

Prerequisites:

- You must have [node](https://nodejs.org/en/download/) and [git](https://git-scm.com/downloads) already installed to complete the setup.
- You also need chrome and firefox installed to execute the test.

Setting up the project is simple and these steps apply to any platform (Linux, Windows or Mac OS):

1. Clone it - `git clone https://github.com/Mawdac/lookingglass-automation-challenge`
2. Run `npm install` - this installs all project dependencies
3. Run `npm run wdupdate` - this downloads the needed chrome/firefox webdrivers

---

## Running the test

The test is configured to run through npm's default test command - `npm test`

To switch between chrome and firefox, simply update the `protractor.conf.js` in the root of the project.

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
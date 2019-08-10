# LookingGlass Automation Challenge

## Setup

Setting up the project is fairly simple:

1. Clone it - `git clone https://github.com/Mawdac/lookingglass-automation-challenge`
2. Run `npm install` - installs all project dependencies
3. Run `npm run wdupdate` - downloads the needed chrome/firefox webdrivers

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
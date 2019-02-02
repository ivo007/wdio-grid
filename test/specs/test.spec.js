const assert = require('assert');

describe('my webdriverio tests', function(){
  it('WDIO test',function() {
    browser.url('https://webdriver.io/');
    const title = browser.getTitle();
    console.log('Title was: ' + title);
    assert(title === 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});

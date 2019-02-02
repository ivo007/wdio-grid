Running Selenium Grid locally with webdriver.io
===============================================

# Grid setup

After downloading this project, open a terminal and start a server from project's root folder: 

`java -jar selenium-server-standalone-3.141.59.jar -role hub`

Server URL is: http://localhost:4444/grid/console

Open another terminal and start a node: 

`java -jar selenium-server-standalone-3.141.59.jar -role node -hub http://localhost:4444/grid/register`

Run as much nodes as you want sessions to be run. E.g. if you want to run 1 nstance of Firefox and 1 instance of Chrome, 
you need 2 sessions aka 2 nodes. For each node open another terminal window.

Said configuration can be tweaked in `wdio.conf.js`:
```
    maxInstances: 2,
    capabilities: [
      {
        maxInstances: 1,
        browserName: 'firefox'
      },
      {
        maxInstances: 1,
        browserName: 'chrome'
      }],
```

# Run Tests

Install scripts:
`yarn install`

Install wdio as per [official documentation for WebDriverIO v4](http://v4.webdriver.io/guide.html).

After completing installation and configuration, ff you use [npx](http://npmjs.com/package/npx), run:

`npx wdio --spec test/specs/test.spec.js`

If everything goes well, one instance of Chrome and one instance of Firefox should spin up and do the tests.

# Manual Setup From Scratch

Note: this setup was done on Ubuntu Linux 16.04 LTS.

* Download Gecko driver for Firefox: https://github.com/mozilla/geckodriver/releases

* Download Chrome driver: https://chromedriver.storage.googleapis.com/ (choose correct version, e.g. "2.43/chromedriver_linux64.zip"

* Download Selenium Server: https://docs.seleniumhq.org/download/ (click on "Download version 3.141.59" or similar)

All files should be downloaded to the project's root, from where tests are being run. This way Selenium server works
 "out of the box". Drivers can also be saved in any other folder - in that a path must be added when starting a server.
 
Install packages:

`yarn add assert webdriverio`

Configure webdriver and follow command-line options:

`npx wdio config`

Run the tests:

``npx wdio --spec test/specs/test.spec.js``

# Further reading material:
https://www.seleniumeasy.com/selenium-tutorials/parallel-execution-in-selenium-grid
https://groups.google.com/forum/#!topic/selenium-users/PRsEBcbpNlM
https://github.com/SeleniumHQ/selenium/wiki/Grid2
https://www.guru99.com/introduction-to-selenium-grid.html
https://www.packtpub.com/sites/default/files/downloads/Distributed_Testing_with_Selenium_Grid.pdf

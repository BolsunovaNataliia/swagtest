<hr>
🌈 INTRODUCTION
<hr>
This project is a set of automated tests that are used to cover login functionality of the test site https://www.saucedemo.com/.

Login tests are written with the [WebdriverIO](https://webdriver.io/) framework and Cucumber as a BDD tool.

It's created using Page Object Model.

<hr>
💥 INSTALLATION
<hr>

If you need:
* Install [Node.js](https://nodejs.org/en/download/)
  
* Install [VSCode](https://code.visualstudio.com/)
    
And then you can:  
* Clone the repository to your machine

* Install npm
  ```bash
  >  npm i
  ```

* Install WebdriverIO
  ```bash
  >  npm init wdio . -- --yes
  ```
* Install Cucumber
  ```bash
  >  npm install --save-dev @wdio/cucumber-framework
  ```
<hr>
🚀 TESTS RUNNING
<hr>

- Run the tests
  ```bash
    > npx wdio
  ```
- In order to run the tests you need
  ```bash
    > npx wdio --spec ./features/login.feature
  ```
- If your .feature files use tags, you can run only a specific scenario
  Add a tag to login.feature:
  ```gherkin
    @login
    Scenario: User logs in with valid credentials
  ```
  Run the test with the tag:
  ```sh
    npx wdio --cucumberOpts.tagExpression="@login"
  ```
<hr>
📊 REPORTING
<hr>

* Install Allure Report

  ```bash
    >  npm install --save-dev @wdio/allure-reporter
  ```
* You need add to wdio.conf.js

  ```javascript
    >  reporters: [['allure', { outputDir: 'allure-results' }]],
  ```
* Run report with Allure

  ```bash
    >  npx allure generate allure-results --clean && npx allure open
  ```
<hr>
🔧 CICD INTEGRATION
<hr>
If you plan to integrate WebdriverIO + Cucumber into GitHub Actions, GitLab CI/CD, or Jenkins, create a configuration for CI.

* Example command to run tests in CI
  ```bash
    >  npx wdio run wdio.conf.js --suite regression
  ```

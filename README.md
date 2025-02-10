<hr>
🌈 INTRODUCTION
<hr>
This project is a set of automated tests that are used to cover login functionality of the test site [Swag Labs](https://www.saucedemo.com/).

Login tests are written with the [WebdriverIO](https://webdriver.io/) framework and Cucumber as a BDD tool.

It's created using Page Object Model.

<hr>
💥 INSTALLATION PROCESS
<hr>

If you need:
* Install Node.js
  ```cls
  >  https://nodejs.org/en/download/
  ```
* Install VSCode
  ```cls
  >  https://code.visualstudio.com/
  ```
  
And then you can:  
* Clone the repository to your machine

* Install npm
  ```cls
  >  npm i
  ```

* Install WebdriverIO
  ```cls
  >  npm init wdio . -- --yes
  ```
* Install Cucumber
  ```cls
  >  npm install --save-dev @wdio/cucumber-framework
  ```
<hr>
🚀 Running Tests
<hr>

- Run the tests
  ```cls
  > npx wdio
  ```
- In order to run the tests you need
  ```cls
    > npx wdio --spec ./features/login.feature

  ```
<hr>
📊 Reporting
<hr>

* Install Allure Report

  ```cls
  >  npm install --save-dev @wdio/allure-reporter
  ```
* You need add to wdio.conf.js

  ```sh
  >  reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
  ```
* Run report with Allure

  ```cli
  >  npx allure generate allure-results --clean && npx allure open
  ```
<hr>
🔧 CICD Integration
<hr>
If you plan to integrate WebdriverIO + Cucumber into GitHub Actions, GitLab CI/CD, or Jenkins, create a configuration for CI.

* Example command to run tests in CI
  ```cli
  >  npx wdio run wdio.conf.js --suite regression
  ```

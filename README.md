Project Overview
This repository contains a JavaScript-based automation testing framework designed for UI testing of web applications. The project utilizes WebdriverIO with Cucumber and Chai assertion libraries to write and execute behavior-driven development (BDD) style tests.

Features
WebdriverIO for browser automation.
Cucumber for BDD-based testing with feature files.
Chai for assertions and validation.
Pre-configured test scripts for the Sauce Demo login page.

Installation
Clone the Repository:

git clone https://github.com/michalnowak14/js-automation-final-task.git
Navigate to the Project Directory:

cd js-automation-final-task
Install Dependencies:

npm install

Running Tests
Command to Execute Tests: Run the test suite with:

npm run wdio

What If npm run wdio Doesn't Work?

Verify that the wdio script is defined in the package.json file:

"scripts": {
  "wdio": "wdio run wdio.conf.js"
}
If missing, add it, or use the direct command:

npx wdio run wdio.conf.js
Test Reports: Test execution generates detailed output in the terminal.

Writing New Tests
Feature Files: Define scenarios in the ./features directory using Gherkin syntax.
Step Definitions: Implement corresponding step definitions in ./features/step-definitions.

Pre-Requisites
Node.js: Version 16.x or higher.
Browser Drivers: Installed and available in PATH for Chrome or Edge (e.g., using ChromeDriver or EdgeDriver).

WebDriverIO Automation Project
Overview
This project is an automated test suite for the SauceDemo web application, using WebDriverIO to perform automated browser testing on Edge and Firefox browsers. The tests focus on verifying the login functionality with different credentials, ensuring both positive and negative test scenarios. The project employs Page Object Model (POM) for organized, maintainable code, and runs tests in parallel across supported browsers.

Project Structure
test/pageobjects: Contains page object classes for different pages on the website.
test/specs: Contains test specification files for the defined test cases.
wdio.conf.js: WebDriverIO configuration file, set up for parallel execution, multi-browser testing, and log generation.
README.md: Project documentation.
Technologies
Test Automation Tool: WebDriverIO
Browsers: Edge and Firefox
Assertions: Chai Assertion Library
Locators: XPath
Patterns: Page Object Model (POM)
Parallel Execution: Configured in wdio.conf.js
Logging: Integrated with WebDriverIO logger
Test Cases
The project covers the following scenarios for the login form on SauceDemo:

UC-1: Login with Empty Credentials
Open the login page.
Enter any values in the "Username" and "Password" fields.
Clear the fields and click the "Login" button.
Verify that an error message appears: "Username is required".
UC-2: Login with Missing Password
Open the login page.
Enter a valid username in the "Username" field, leave the "Password" field empty.
Click the "Login" button.
Verify that an error message appears: "Password is required".
UC-3: Successful Login with Valid Credentials
Open the login page.
Enter a valid username and password as specified in the Accepted Username section.
Click the "Login" button.
Verify that the title on the dashboard is "Swag Labs".
Setup and Installation
Clone the Repository:

git clone <repository-url>
cd final-task
Install Dependencies: Run the following command to install necessary packages:


npm install
GeckoDriver Setup:

Firefox browser requires Geckodriver. Download and place it in your system path, or install it using npm:

npm install geckodriver --save-dev
EdgeDriver Setup:

Edge browser requires MSEdgeDriver. You can download it manually or use:

npm install msedgedriver --save-dev
Running Tests
Run All Tests: Execute tests on all browsers in parallel with:


npx wdio wdio.conf.js
Run Tests on a Specific Browser: Specify the browser in wdio.conf.js or override it in the command:


npx wdio wdio.conf.js --capabilities.browserName=edge
View Test Results: Test results will be displayed in the terminal. The project is configured for detailed logging to help debug any issues.

Folder Structure
bash
Skopiuj kod
├── test/
│   ├── pageobjects/
│   │   └── loginPage.js          # Login page object file
│   ├── specs/
│   │   └── login.test.js         # Test suite for login scenarios
├── .gitignore                    # Ignores node_modules and config files
├── README.md                     # Project documentation
└── wdio.conf.js                  # WebDriverIO configuration
Additional Options
This project includes optional setup for advanced patterns and loggers:

Pattern (Page Object Model): Promotes code reusability and readability by encapsulating page-specific actions.
Logger: WebDriverIO's built-in logger records details during test execution to help debug issues.
Improvements and Future Scope
The project can be expanded by adding:

Additional test cases for the rest of the application.
Enhanced logging with custom log levels.
Additional BDD structure using Cucumber.
Troubleshooting
Issue with Browsers: Ensure EdgeDriver and GeckoDriver are in your system's path.
Dependency Errors: Reinstall dependencies by running:
bash
Skopiuj kod
rm -rf node_modules
npm install
License
This project is licensed under the MIT License.


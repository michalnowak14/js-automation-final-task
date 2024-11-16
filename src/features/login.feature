Feature: Login form validation on Sauce Demo

  Scenario: UC-1 Test Login form with empty credentials
    Given I am on the Sauce Demo login page
    When I enter a username and password
    And I clear both the username and password fields
    And I click the Login button
    Then I should see an error message saying "Username is required"

  Scenario: UC-2 Test Login form with Username only
    Given I am on the Sauce Demo login page
    When I enter a username
    And I leave the password field empty
    And I click the Login button
    Then I should see an error message saying "Password is required"

  Scenario: UC-3 Test Login form with valid credentials
    Given I am on the Sauce Demo login page
    When I enter a valid username
    And I enter a valid password
    And I click the Login button
    Then I should see the dashboard with the title "Swag Labs"


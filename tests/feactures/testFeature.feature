Feature: Login
  As a customer
  I want to be able to log in
  So that I can access restricted features
  Scenario: Unauthenticated user
    Given I am on the login page
    When I login
    Then I should be logged in
  Scenario: User who hasn't logged in for ages
    Given I haven't logged in for 4 score and 7 years
    And I am on the login page
    When I login
    Then I should see the welcome back message
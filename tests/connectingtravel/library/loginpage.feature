Feature: login and logout validations
  @login
  Scenario Outline: login with valid credentials

    Given I am in connectingtravel loginpage
    When I enter username as '<username>' and password as '<password>'
    Then it should display dashboard
    Examples:
      |username               |password|
      |rdepuru+2@gmail.com |mahireddy1|
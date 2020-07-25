@FormPage @Regression
Feature: Validate the features implemented in the Form Page
  As a user
  I would like to be able interact with the form
  So that in order to be able to use the results of the form

  Scenario Outline: Validate form page
    Given I navigate to the form page
    And a form should be visible with one input box and one submit button
    When I submit the form with '<value>'
    Then I should get redirect to the Hello page
    And the following text should appear: '<value>'

    Examples:
      | value   |
      | John    |
      | Sophia  |
      | Charlie |
      | Emily   |
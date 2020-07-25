@GeneralNavigation @Regression
Feature: Validate general navigation in the web site duodecadits
  As a user
  I would like to be able to navigate in the pages of the web site duodecadits
  So that in order to be able to navigate and perform visual validations

  Scenario Outline: Validate the title "UI Testing Site" on every site
    Given I navigate to the '<url>'
    Then  I will have the title 'UI Testing Site' and logo on every site

    Examples:
      | url   |
      | Home  |
      | Form  |
      | Error |

  Scenario Outline: General navigation
    Given I navigate to the '<url>'
    When I click on the '<navigation button>'
    Then I should get navigated to the '<result page>' and <status>

    Examples:
      | url  | navigation button | result page | status |
      | Home | Home button       | Home page   | 200    |
      | Form | Home button       | Home page   | 200    |
      | Home | Form button       | Form page   | 200    |
      | Form | Form button       | Form page   | 200    |
      | Home | UI Testing button | Home page   | 200    |
      | Form | UI Testing button | Home page   | 200    |
      | Home | Error button      | Error page  | 404    |
      | Form | Error button      | Error page  | 404    |

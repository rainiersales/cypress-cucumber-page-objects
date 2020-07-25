# Cypress-Cucumber-Page-Objects 
### [Docler Holding QA Department]
Sample using of Cypress with Cucumber and Page Objects to demonstrate automation skills.

### Run scenarios tests in terminal
```
npm install
npm test
```  
```
       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  Features/Form.feature                    00:03        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Features/GeneralNavigation.feature       00:04       11       11        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Features/Home.feature                    00:01        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:09       16       16        -        -        -  
```
### Run scenarios with cypress interface
```
yarn run cypress open
```  

# Tags usage

### Tagging tests
You can use tags to select which test should run using cucumber's tag expressions
eg. `'@regression'`.

To make things faster and skip cypress opening a browser for every feature file (taking a couple seconds for each one), 
even the ones we want ignored, we use our own cypress-tags wrapper. It passes all the arguments to cypress, 
so use it the same way you would use cypress CLI. The only difference is it will first filter out the files we don't care about, 
based on the tags provided. 

### Example:

```
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
```
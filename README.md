Test Automation with Cypress

This repository contains a test automation project developed with Cypress. The goal was to validate the functionalities of an automation practice page, ensuring that everything is working as expected.

About the Project

This project was designed to practice my overall Cypress knowledge and perform automated tests, including:

• Basic navigation, plus handling opening of new window and tab from different origin;
• Multiple assertions throughout the suites;
• Use of regular expressions;
• Parent to child traverse on DOM Elements;
• Interactions with:
  • Buttons;
  • Radio Buttons;
  • Check Boxes;
  • Dynamic (Autocomplete) and Static Dropdowns;
  • Alert and Confirm messages;
  • Web Table testing;
  • Mouse Over feature.

Technologies Used

  • Cypress - Framework for end-to-end testing;
  • Javascript - Programming language;
  • Mocha - Testing framework to handle Cypress' asynchronous nature;
  • Chai - Library for assertions;
  • Node.js;
  • Github Actions (WIP)

Installation and Configuration

Follow the steps bellow to install and configure the project:

1. Installation of devDependencies:
   Make sure Node.js is installed.
   To install the devDependencies, run:

npm install

2. Running tests
   To open Cypress, run:

npx cypress open

   To run the tests in headless mode (directly on terminal), run:

npx cypress run

Project Structure

E2ERSAAPP
├── cypress
│   ├── e2e                    #Test files                                     
│   ├── support                #Cypress support files
├── cypress.config.js          #Cypress configuration
├── package.json               #Project dependencies, scripts, etc.
├── README.md                  #Project documentation

Available Test Cases

The bellow test cases are currently implemented.

cypress/e2e/pageHeader.cy.js (5 tests)
├── Page Header Features
    ├── Visibility of Page Logo
    ├── Navigate to home page by clicking on home button
    ├── Click on Practice Button
    ├── Click on Login Button
    ├── Click on Sign Up Button

cypress/e2e/firstSection.cy.js (16 tests)
├── Radio Buttons Feature
    ├── Visibility of Radio Button Label
    ├── Choose Radio Button 1
    ├── Choose Radio Button 2
    ├── Choose Radio Button 3
    
├── Suggestion Dropdown Feature
    ├── Visibility of Dynamic Dropdown Label
    ├── Checking the relevance of shown results
    ├── Selecting suggestion from dropdown using mouse
    ├── Selecting suggestion from dropdown using keyboard
    ├── Closing dropdown when clicking outside of it
    
├── Static Dropdown Feature
    ├── Visibility of Static Dropdown Label
    ├── Visibility of Dropdown
    ├── Selecting Dropdown Option 1
    ├── Selecting Dropdown Option 2
    ├── Selecting Dropdown Option 3

├── Check Boxes Feature
    ├── Visibility of Checkbox Label
    ├── Check and uncheck all checkboxes

cypress/e2e/secondSection.cy.js (7 tests)
├── Switch Window Feature
    ├── Visibility of Switch Window Label
    ├── Click on Open Window Button
    
├── Switch Tab Feature
    ├── Visibility of Switch Tab Label
    ├── Click on Open Tab Button

├── Pop Up Feature
    ├── Visibility of Pop Up Label
    ├── Click on Alert Button
    ├── Click on Confirm Button

cypress/e2e/thirdSection.cy.js (6 tests)
├── Web Table Feature
    ├── Visibility of Web Table Label
    ├── Is displaying correct columns

├── Invisible Element Feature
    ├── Visibility of Element Display Label
    ├── Hiding and showing blank

├── Mouse Over Feature
    ├── Visibility of Mouse Over Label
    ├── Clicking on top option

Adding New Tests
If you want to cover any features that you thought I left out or that may be added in future and think should be included:
1. Create a new file in cypress/e2e folder and name it as follows: featureName.cy.js
2. Try and use the best practices of Cypress to implement your specs.
3. Run your tests to confirm they work as they should.

Contribution

Feel free to report any issues you may find and to contribute to the project as well. To do so:
1. Fork this repository
2. Create a new branch
3. Commit your changes and push them to your fork
4. Open a pull request detailing your changes

If you have further questions or suggestions, please contact me on: jpbakerst@gmail.com

Peace!

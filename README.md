# :robot: Test Automation with Cypress

This repository contains a test automation project developed with Cypress. The goal was to validate the functionalities of an automation practice page, ensuring that everything is working as expected.

## :hammer_and_wrench: About the Project

This project was designed to practice my overall Cypress knowledge and perform automated tests, including:

- Basic navigation, plus handling opening of new window and tab from different origin;
- Multiple assertions throughout the suites;
- Use of regular expressions;
- Parent to child traverse on DOM Elements;
- Interactions with:
  - Buttons;
  - Radio Buttons;
  - Check Boxes;
  - Dynamic (Autocomplete) and Static Dropdowns;
  - Alert and Confirm messages;
  - Web Table testing;
  - Mouse Over feature.

## :desktop_computer: Technologies Used

  - Cypress - Framework for end-to-end testing;
  - Javascript - Programming language;
  - Mocha - Testing framework to handle Cypress' asynchronous nature;
  - Chai - Library for assertions;
  - Node.js;
  - API Testing (To be done);
  - Continuous Integration (To be done).

## :package: Installation and Configuration

Follow the steps bellow to install and configure the project:

### 1. Installation of devDependencies  
   Make sure Node.js is installed.  
     
   To install the devDependencies, run:
```
npm install
```
### 2. Running tests  
   To open Cypress, run:
```
npx cypress open
```
   To run the tests in headless mode (directly on terminal), run:
```
npx cypress run
```
## :open_file_folder: Project Structure

E2ERSAAPP  
├── cypress  
│&nbsp;&nbsp;&nbsp;&nbsp;   ├── e2e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Test files  
│&nbsp;&nbsp;&nbsp;&nbsp;   ├── support&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Cypress support files  
├── cypress.config.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Cypress configuration  
├── package.json&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Project dependencies, scripts, etc.  
├── README.md&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Project documentation  

## :pushpin: Available Test Cases

The bellow test cases are currently implemented.

cypress/e2e/pageHeader.cy.js (5 tests)  

├── Page Header Features  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Page Logo  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Navigate to home page by clicking on home button  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Click on Practice Button  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Click on Login Button  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Click on Sign Up Button  
***
cypress/e2e/firstSection.cy.js (16 tests)  

├── Radio Buttons Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Radio Button Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Choose Radio Button 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Choose Radio Button 2  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Choose Radio Button 3  
    
├── Suggestion Dropdown Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Dynamic Dropdown Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Checking the relevance of shown results  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Selecting suggestion from dropdown using mouse  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Selecting suggestion from dropdown using keyboard  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Closing dropdown when clicking outside of it  
    
├── Static Dropdown Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Static Dropdown Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Dropdown  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Selecting Dropdown Option 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Selecting Dropdown Option 2  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Selecting Dropdown Option 3  

├── Check Boxes Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Checkbox Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Check and uncheck all checkboxes  
***  
cypress/e2e/secondSection.cy.js (7 tests)  

├── Switch Window Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Switch Window Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Click on Open Window Button  
    
├── Switch Tab Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Switch Tab Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Click on Open Tab Button  

├── Pop Up Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Pop Up Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Click on Alert Button  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Click on Confirm Button  
***  
cypress/e2e/thirdSection.cy.js (6 tests)  

├── Web Table Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Web Table Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Is displaying correct columns  

├── Invisible Element Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Element Display Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Hiding and showing blank  

├── Mouse Over Feature  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Visibility of Mouse Over Label  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├── Clicking on top option  

## :screwdriver: Adding New Tests
If you want to cover any features that you thought I left out or that may be added in future and think should be included:
1. Create a new file in cypress/e2e folder and name it as follows: featureName.cy.js
2. Try and use the best practices of Cypress to implement your specs.
3. Run your tests to confirm they work as they should.

## :handshake: Contribution

Feel free to report any issues you may find and to contribute to the project as well. To do so:
1. Fork this repository;
2. Create a new branch;
3. Commit your changes and push them to your fork;
4. Open a pull request detailing your changes.

If you have further questions or suggestions, please contact me on: jpbakerst@gmail.com

Peace!

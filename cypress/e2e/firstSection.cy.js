/// <reference types="Cypress" />

describe('Radio Buttons Feature', () => {

    it('Visibility of Radio Button Label', () => {
        cy.contains("Radio Button Example").should('be.visible');
    });

    it('Choose Radio Button 1', () => {
        cy.contains("Radio1").should('be.visible');
        cy.get("input[value='radio1']").click().should('be.checked');
    });

    it('Choose Radio Button 2', () => {
        cy.contains("Radio2").should('be.visible');
        cy.get("input[value='radio2']").click().should('be.checked');
    });

    it('Choose Radio Button 3', () => {
        cy.contains("Radio3").should('be.visible');
        cy.get("input[value='radio3']").click().should('be.checked');
    });

    describe('Suggestion Dropdown Feature', () => {

        const dropdownInput = "input[id='autocomplete']";

        it('Visibility of Dynamic Dropdown Label', () => {
            cy.contains('Suggession Class Example').should('be.visible');
        });

        it('Checking the relevance of shown results', () => {
            cy.get(dropdownInput).type('br');
            cy.get('.ui-menu-item-wrapper').should('have.length', '5');
        });

        it('Selecting suggestion from dropdown using mouse', () => {
            cy.get(dropdownInput).type('br');
            cy.get('.ui-menu-item-wrapper').contains('Brazil').click();
            cy.get(dropdownInput).should('have.value', 'Brazil');
        });

        it('Selecting suggestion from dropdown using keyboard', () => { //.type() só pode ser usado em 1 elemento, daí a necessidade do .first()
            cy.get(dropdownInput).type('br');
            cy.get('.ui-menu-item-wrapper').first().type('{enter}');
        });

        it('Closing dropdown when clicking outside of it', () => {
            cy.get(dropdownInput).type('br');
            cy.get('.ui-menu-item-wrapper').should('be.visible');
            cy.get('body').click({ force: true });
            cy.get('.ui-menu-item-wrapper').should('not.be.visible');
        });
    });

    describe('Static Dropdown Feature', () => {

        beforeEach(() => {
            cy.get('#dropdown-class-example').as('staticDropdown')
        });

        it('Visibility of Static Dropdown Label', () => {
            cy.contains('Dropdown Example').should('be.visible');
        });

        it('Visibility of Dropdown', () => {
            cy.get('@staticDropdown').should('be.visible');
        });

        it('Selecting Dropdown Option 1', () => {
            cy.get('@staticDropdown').select('option1').should('have.value', 'option1');
        });

        it('Selecting Dropdown Option 2', () => {
            cy.get('@staticDropdown').select('option2').should('have.value', 'option2');
        });

        it('Selecting Dropdown Option 3', () => {
            cy.get('@staticDropdown').select('option3').should('have.value', 'option3');
        });
    });

    describe('Check Boxes Feature', () => {

        it('Visibility of Checkbox Label', () => {
            cy.contains('Checkbox Example').should('be.visible');
        });

        it('Check and uncheck all checkboxes', () => {
            cy.get('#checkbox-example input[type="checkbox"]').each((element) => {
                cy.wrap(element).check().should('be.checked');
                cy.wrap(element).uncheck().should('not.be.checked');
            });
        });
    });
});
/// <reference types="Cypress" />

describe('Web Table Feature', () => {

    it('Visibility of Web Table Label', () => {
        cy.contains("Web Table Example").should('be.visible');
    });

    it('Is displaying correct columns', () => {
        cy.get('#product').should('be.visible');
        cy.get('th:nth-child(1)').should('contain.text', 'Instructor');
        cy.get('th:nth-child(2)').should('contain.text', 'Course');
        cy.get('th:nth-child(3)').should('contain.text', 'Price');
    });

    describe('Invisible Element Feature', () => {

        it('Visibility of Element Display Label', () => {
            cy.contains("Element Displayed Example").should('be.visible');
        });

        it('Hiding and showing blank', () => {
            cy.get('#displayed-text').should('be.visible').type('I see you!');
            cy.get('#hide-textbox').should('be.visible').click();
            cy.get('#displayed-text').should('not.be.visible');
            cy.get('#show-textbox').should('be.visible').click();
            cy.get('#displayed-text').should('be.visible').and('have.value', 'I see you!');
        });

        describe('Mouse Over Feature', () => {

            it('Visibility of Mouse Over Label', () => {
                cy.contains('Mouse Hover Example').should('be.visible');
            });

            it('Clicking on top option', () => {
                cy.get('#mousehover').should('be.visible').invoke('show');
                cy.contains('Top').click({ force: true });
                cy.url().should('include', '#top');
            });
        });
    });
});
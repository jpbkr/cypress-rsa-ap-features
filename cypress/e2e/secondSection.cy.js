/// <reference types="Cypress" />

describe('Switch Window Feature', () => {

    it('Visibility of Switch Window Label', () => {
        cy.contains('Switch Window Example').should('be.visible');
    });

    it('Click on Open Window Button', () => {
        let capturedUrl;
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                capturedUrl = url
            });
        });
        cy.contains('Open Window').should('be.visible');
        cy.get('#openwindow').click();
        cy.then(() => {
            cy.visit(capturedUrl);
        });
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.url().should('include', 'qaclickacademy');
            cy.contains('info@qaclickacademy.com').should('be.visible');
        });
    });

    describe('Switch Tab Feature', () => {

        it('Visibility of Switch Tab Label', () => {
            cy.contains('Switch Tab Example').should('be.visible');
        });

        it('Click on Open Tab Button', () => {
            cy.contains('Open Tab').should('be.visible');
            cy.get('#opentab').invoke('removeAttr', 'target').click();
            cy.origin("https://www.qaclickacademy.com", () => {
                cy.url().should('include', 'qaclickacademy');
            });
        });
    });

    describe('Pop Up Feature', () => {

        it('Visibility of Pop Up Label', () => {
            cy.contains('Switch To Alert Example').should('be.visible');
        });

        it('Click on Alert Button', () => {
            cy.get('#name').should('be.visible').type('User');
            cy.get('#alertbtn').should('be.visible').click();
            cy.on('window:alert', (message) => {
                expect(message).to.equal('Hello User, share this practice page and share your knowledge');
            });
        });

        it('Click on Confirm Button', () => {
            cy.get('#name').type('User');
            cy.get('#confirmbtn').should('be.visible').click();
            cy.on('window:confirm', (message) => {
                expect(message).to.equal('Hello User, Are you sure you want to confirm?');
            });
        });
    });
});
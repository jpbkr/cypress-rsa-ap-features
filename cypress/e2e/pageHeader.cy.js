/// <reference types="Cypress" />

describe('Page Header Features', () => {

  it('Visibility of Page Logo', () => {
    cy.get("img[class='logoClass']").should('be.visible');
  });

  it('Navigate to home page by clicking on home button', () => {
    cy.contains('Home').should('be.visible').click();
    cy.origin('https://www.rahulshettyacademy.com', () => {
      cy.url().should('equals', 'https://www.rahulshettyacademy.com/');
      cy.contains('An Academy to').should('be.visible');
    });
  });

  it('Click on Practice Button', () => { //Botão não responde ao clique. Potencial?
    cy.contains('Practice').should('be.visible').click();
  });

  it('Click on Login Button', () => { //Botão não responde ao clique. Potencial?
    cy.contains('Login').should('be.visible').click();
  });

  it('Click on Sign Up Button', () => { //Botão não responde ao clique. Potencial?
    cy.contains('Signup').should('be.visible').click();
  });
});
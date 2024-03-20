/// <reference types="cypress" />
describe("Contact Details", () => {
  beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
  it('Check the Login not input data', () => {
    // Username
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().should('not.have.text');
    // Password
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().should('not.have.text');
    // Button Login
    cy.get('.oxd-button').click();
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text','Required');
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text','Required');
    cy.url().should('include','/login');
  });
  it('Check the Login with invalid data', () => {
    // Username
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .click().clear().type('apausernamenya?');
    // Password
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .click().clear().type('apapassnya ya?');
    // Button Login
    cy.get('.oxd-button').click();
    cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
    cy.url().should('include','/login');
  });
  it('Check the Login with valid data', () => {
    // Username
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .click().clear().type('Admin');
    // Password
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .click().clear().type('admin123');
    // Button Login
    cy.get('.oxd-button').click();
    cy.wait(3000);
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard');
    cy.url().should('include','/index');
  });
})

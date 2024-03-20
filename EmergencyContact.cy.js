/// <reference types="cypress" />
describe("Emergency Contact", () => {
  beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.wait(4000);
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(3) > .orangehrm-tabs-item').click();
  });
  it('Assigned Emergency Contacts', () => {
    cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click();
    // Name
    cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('oman');
    // Relationship
    cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('taupik');
    // Home Telephone
    cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('0213-1234-1254');
    // Mobile
    cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('0833-7625-2393');
    // Work Telephone
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('0215-2334-3411');
    // Save
    cy.get('.oxd-button--secondary').click();
    cy.contains('Successfully Saved').should('include.text','Successfully Saved');
    cy.contains('Records Found').should('include.text','Records Found');
  });
  it('Attachments', () => {
    cy.get(':nth-child(2) > .orangehrm-action-header > .oxd-button').click();
    // Select File
    cy.get('.oxd-file-input').selectFile('D:/Final Project/BIONIC/cypress/fixtures/contoh');
    // Comment
    cy.get('.oxd-textarea').clear().type('file oman taupik');
    // Save
    cy.get('.oxd-button--secondary').click();
    cy.contains('Successfully Saved').should('include.text','Successfully Saved');
    cy.contains('Records Found').should('include.text','Records Found');
  });
});
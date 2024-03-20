/// <reference types="cypress" />
describe("PIM", () => {
  beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.wait(4000);
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();
  });
  it('Add Employee for Candidate PIM', () => {
    cy.get('.orangehrm-header-container > .oxd-button').click();
    // First Name
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
    .clear().type('oman');
    // Middle Name
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear();
    // Last Name
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('taupik');
    // Employee Id
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('01');
    // Accept jpg
    cy.get('#oxd-icon bi-plus').selectFile('cypress/fixtures/contoh/foto.jpg');
    //Create Login Details
    cy.get('.oxd-switch-input').click();
    // Username
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('ottester');
    // Status
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
    // Password
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('ottester123');
    // Confirm Password
    cy.get('.oxd-switch-input').click();
    // Save
    cy.get('.oxd-button--secondary').click();
    cy.contains('Successfully Saved').should('include.text','Successfully Saved');
    cy.wait(5000);
    cy.contains('Personal Details').should('include.text','Personal Details');
  });
  it('Check Employee Information', () => {
    // Employee Name
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    .clear().type('oman');
    // Employee Id
    cy.get(':nth-child(2) > .oxd-input').clear().type('01');
    // Employment Status
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Include
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Supervisor Name
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    .clear();
    // Job Title
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Sub Unit
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.contains('Records Found').should('include.text','Records Found');
  });
  it('Check Employee Invalid Information', () => {
    // Employee Name
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    .clear().type('wawa');
    // Employee Id
    cy.get(':nth-child(2) > .oxd-input').clear().type('0111');
    // Employment Status
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Include
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Supervisor Name
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    .clear();
    // Job Title
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Sub Unit
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.contains('No Records Found').should('include.text','No Records Found');
  });
});
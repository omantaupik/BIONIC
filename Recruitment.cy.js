/// <reference types="cypress" />
describe("Recruitment", () => {
  beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.wait(4000);
    cy.get(':nth-child(5) > .oxd-main-menu-item').click();
  });
  it('Add Candidate for Recruitment', () => {
    cy.get('.orangehrm-header-container > .oxd-button').click();
    // First Name
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
    .clear().type('oman');
    // Middle Name
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear();
    // Last Name
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('taupik');
    // Vacancy
    cy.get('.oxd-select-text--after > .oxd-icon').click();
    cy.get('.oxd-select-text-input').click();
    // Email
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('admin@gmail.com');
    // Contact Number
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('0215-2334-3411');
    // Resume
    cy.get('.oxd-file-button').selectFile('cypress/fixtures/contoh/resume.pdf');
    // Keywords
    cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('QA Tester, QA Engineer, Manual Tester, Automation Tester');
    // Date of Application
    cy.get('.oxd-date-input > .oxd-input').clear().type('2024-20-03');
    // Notes
    cy.get('.oxd-textarea').clear().type('has experience for web testing and mobile testing');
    // Consent to keep data
    cy.get('.oxd-checkbox-input > .oxd-icon').click();
    // Save
    cy.get('.oxd-button--secondary').click();
    cy.contains('Successfully Saved').should('include.text','Successfully Saved');
    cy.contains('Application Stage').should('include.text','Application Stage');
  });
  it('Check Candidate for Recruitment', () => {
    // Job Title
    cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    .click();
    cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Vacancy
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    .click();
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Hiring Manager
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Status
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    .click();
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Candidate Name
    cy.get('.oxd-autocomplete-text-input > input').clear().type('oman taupik');
    // Keywords
    cy.get(':nth-child(2) > .oxd-input')
    .clear().type('QA Tester, QA Engineer, Manual Tester, Automation Tester');
    // Date of Application
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .clear().type('2024-20-03');
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .clear().type('2024-30-03');
    // Method of Application
    cy.get(':nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
    .click();
    cy.get(':nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click();
    // Search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.contains('Records Found').should('include.text','Records Found');
    cy.contains('Vacancy').should('include.text','Vacancy');
    cy.contains('Candidate').should('include.text','Candidate');
    cy.contains('Hiring Manager').should('include.text','Hiring Manager');
    cy.contains('Date of Application').should('include.text','Date of Application');
    cy.contains('Status').should('include.text','Status');
  });
});
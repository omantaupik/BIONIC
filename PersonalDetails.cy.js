/// <reference types="cypress" />
describe("Personal Details", () => {
  beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.wait(3000);
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(1) > .orangehrm-tabs-item').click();
  });
  it('Check the Personal Details not input data', () => {
    // Employee Full Name => (FirstName, MiddleName, Lastname)
    //FistName
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('include.text','Required');
    //MiddleName
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    //LastName
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('include.text','Required');
    // Employee Id
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Other Id
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Driver's License Number
    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // License Expiry Date
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();
    cy.get('.--clear').click();
    // Nationality
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get('.oxd-select-dropdown > :nth-child(1)').click();
    // Marital Status
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get('.oxd-select-dropdown > :nth-child(1)').click();
    // Date of Birth
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();
    cy.get('.--clear').click();
    // Gender
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').should('not.be.disabled');
    // Save
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('include.text','Required');
    cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('include.text','Required');
  });

  it('Check the Personal Details with invalid data', () => {
    // Employee Full Name => (FirstName, MiddleName, Lastname)
    //FistName
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('qwerty');
    //MiddleName
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('1234');
    //LastName
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('uiop');
    // Employee Id
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('00decws');
    // Other Id
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('00decws');
    // Driver's License Number
    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('085grsgvuy');
    // License Expiry Date
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();
    cy.get('.--clear').click().type('3r45grfgrt');
    // Nationality
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get('.oxd-select-dropdown > :nth-child(2)').click();
    // Marital Status
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get('.oxd-select-dropdown > :nth-child(3)').click();
    // Date of Birth
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();
    cy.get('.--close').click();
    // Gender
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
    // Save
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
    cy.get('.oxd-input-group > .oxd-text').should('include.text','Should be a valid date in yyyy-dd-mm format');
    });

   it('Check the Personal Details with valid data', () => {
    // Employee Full Name => (FirstName, MiddleName, Lastname)
    //FistName
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('oman');
    //MiddleName
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear();
    //LastName
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('taupik');
    // Employee Id
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('QA-01');
    // Other Id
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('QA-001');
    // Driver's License Number
    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('97765428100836');
    // License Expiry Date
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();
    cy.get('.--clear').click().type('2000-10-03');
    // Nationality
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get(':nth-child(84)').click();
    // Marital Status
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get('.--selected').click();
    // Date of Birth
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click();
    cy.get('.--clear').click().type('2000-10-03');
    // Gender
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click();
    // Save
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
    cy.contains('Success').should('include.text','Success');
    cy.contains('Successfully Updated').should('include.text','Successfully Updated');
    });
});



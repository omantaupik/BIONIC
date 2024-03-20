/// <reference types="cypress" />
describe("Contact Details", () => {
  beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.wait(3000);
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(2) > .orangehrm-tabs-item').click();
  });
  it('Check the Contact Details not input data', () => {
    // Address => (Sheet1, Sheet2, City)
    // Sheet1
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Sheet2
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // City
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // State/Province
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Zip/Postal Code
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Country
    cy.get('.oxd-select-text').click();
    cy.get('.oxd-select-text-input').click();
    // Telephone => (Home, Mobile, Work)
    // Home
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Mobile
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Work
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Email => (Work Email, Other Email)
    // Work Email
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Other Email
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().should('not.contain.text');
    // Save
    cy.get('.oxd-form-actions > .oxd-button').click();
    cy.contains('Success').should('include.text','Success');
    cy.contains('Successfully Updated').should('include.text','Successfully Updated');
  });

  it('Check the Contact Details with invalid data', () => {
    // Address => (Sheet1, Sheet2, City)
    // Sheet1
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('jalann buntung');
    // Sheet2
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('kampung jurang');
    // City
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('desa penyayang');
    // State/Province
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('jawaa');
    // Zip/Postal Code
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0284754hv');
    // Country
    cy.get('.oxd-select-text').click();
    cy.get('.oxd-select-dropdown > :nth-child(2)').click();
    // Telephone => (Home, Mobile, Work)
    // Home
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('00098765');
    // Mobile
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('02755273');
    // Work
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0987654321');
    // Email => (Work Email, Other Email)
    // Work Email
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('abcd@gmail.com');
    // Other Email
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('efgh@gmail.com');
    // Save
    cy.get('.oxd-form-actions > .oxd-button').click();
    cy.contains('Success').should('include.text','Success');
    cy.contains('Successfully Updated').should('include.text','Successfully Updated');
  });

  it('Check the Contact Details with valid data', () => {
    // Address => (Sheet1, Sheet2, City)
    // Sheet1
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Kp. Melati Kidul');
    // Sheet2
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Ds. Karanganyar');
    // City
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Tangerang');
    // State/Province
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Banten');
    // Zip/Postal Code
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('15551');
    // Country
    cy.get('.oxd-select-text').click();
    cy.get(':nth-child(101)').click();
    // Telephone => (Home, Mobile, Work)
    // Home
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0213-1234-1254');
    // Mobile
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0833-7625-2393');
    // Work
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0215-2334-3411');
    // Email => (Work Email, Other Email)
    // Work Email
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('omann@gmail.com');
    // Other Email
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('taupikk@gmail.com');
    // Save
    cy.get('.oxd-form-actions > .oxd-button').click();
    cy.contains('Success').should('include.text','Success');
    cy.contains('Successfully Updated').should('include.text','Successfully Updated');
  });
});



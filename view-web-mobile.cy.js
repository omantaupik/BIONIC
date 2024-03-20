const screenview = require('./screenview.js')
beforeEach(()=>{
    cy.on('uncaught:exception',(err,runnable) => {
        return false
    });
});
describe("view for web", () => {
  Object.values(screenview).map((key, i) =>{
    it('view for web and mobile', () => {
        cy.viewport(key.viewportwidth, key.viewportheight);
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(5000);
    });
  });
});
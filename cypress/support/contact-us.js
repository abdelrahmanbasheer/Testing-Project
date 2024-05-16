Cypress.Commands.add('SignupName', () => { 
   cy.get('[data-qa="signup-name"]').type("abdelrahman")
 })
Cypress.Commands.add('SignupEmail', () => { 
   cy.get('[data-qa="signup-email"]').type("abdelrahmanbasheer72@gmail.com")
 })
Cypress.Commands.add('SignupBtn', () => { 
   cy.get('[data-qa="signup-button"]').click()
 })
 Cypress.Commands.add('loginEmail', (name) => { 
   cy.get('[data-qa="login-email"]').type(name).should("have.value",name)
 })
 Cypress.Commands.add('loginPswd', (name) => { 
   cy.get('[data-qa="login-password"]').type(name).should("have.value",name)
 })
 Cypress.Commands.add('loginBtn', () => { 
   cy.get('[data-qa="login-button"]').click()
 })
 Cypress.Commands.add('EqUrl', (url) => { 
   cy.url().should('eq',url)
 })
 Cypress.Commands.add('ButtonClick', (item) => { 
   cy.get(item).click()
 })
 Cypress.Commands.add('ProductInfo', (item) => { 
   cy.get('.product-information').eq(0).should("contain.text",item)
 })
 Cypress.Commands.add('ExistBe', (item) => { 
   cy.get(item).should("be.exist");
 })
 

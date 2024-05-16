Cypress.Commands.add('SignupName', (name) => { 
  cy.get('[data-qa="signup-name"]').type(name).should("have.value", name);
})
Cypress.Commands.add('SignupEmail', (email) => { 
  cy.get('[data-qa="signup-email"]').type(email).should("have.value", email);
})
Cypress.Commands.add('SignupBtn', () => { 
  cy.get('[data-qa="signup-button"]').click()
})
Cypress.Commands.add('loginEmail', (email) => { 
  cy.get('[data-qa="login-email"]').type(email).should("have.value", email)
})
Cypress.Commands.add('loginPswd', (password) => { 
  cy.get('[data-qa="login-password"]').type(password).should("have.value", password)
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
  cy.get('.product-information').eq(0).should("contain.text", item)
})
Cypress.Commands.add('ExistBe', (item) => { 
  cy.get(item).should("be.exist");
})
 

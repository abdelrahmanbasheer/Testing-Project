import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav= new Navigation()
const Funct=new sauceDemo()

describe('SauceDemo', () => {

      it('[1] signing up with a positive scenario', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="signup-name"]').type("abdelrahman")
        cy.get('[data-qa="signup-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.url().should('contain',"https://automationexercise.com/signup")
        cy.get('#id_gender1').check();
        cy.get('#id_gender1').should("be.checked");
        cy.get('[data-qa="name"]').should("have.value","abdelrahman")
        cy.get('[data-qa="email"]').should("have.value","abdelrahmanbasheer72@gmail.com")
        cy.get('#days').should('have.length.at.least', 1)
        cy.get('#days').select('1')
        cy.get('#months').select("1")
        cy.get('#years').select('2000')
        cy.get('#first_name').type("abdo")
        cy.get('#last_name').type("7amada")
        cy.get('#password').type("123456")
        cy.get('#address1').type("cairo")
        cy.get('#country').select('India')
        cy.get('#state').type("cairo")
        cy.get('#city').type("cairo")
        cy.get('#zipcode').type("12345")
        cy.get('#mobile_number').type("123456789")
        cy.get('.login-form > form > .btn').click()
        cy.url().should('eq',"https://automationexercise.com/account_created")
      });
    
      it('[3] logging in with wrong pswd ', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("12346)")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should("contain.text","Your email or password is incorrect!")  
      });
      it('[3] logging in with wrong email ', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456)")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should("contain.text","Your email or password is incorrect!")  
      });
      it('[3] logging with correct data ', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
      
      });
      it.only('[3] signing up with no name ', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="signup-name"]').type("abdelrahman")
        cy.get('[data-qa="signup-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should("contain.text","Email Address already exist!") 
      });
     


      
});


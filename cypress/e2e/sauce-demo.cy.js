import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav= new Navigation()
const Funct=new sauceDemo()

describe('SauceDemo', () => {
      it('[1] signing up with a positive scenario', () => {
        nav.loginPageNav()
        Funct.validSignup()
      });
    
      it('[2] logging in with wrong pswd ', () => {
        nav.loginPageNav()
        Funct.wrongPswdLogin()
      });
      it('[3] logging in with wrong email ', () => {
        nav.loginPageNav()
        Funct.wrongEmailLogin()
      });
      it('[4] logging with correct data ', () => {
        nav.loginPageNav()
        Funct.validLogin()
      });
    
      it('[5] signing up with a preused email', () => {
        nav.loginPageNav()
        Funct.preusedEmailsignup()
      });
      it('[6] filtering women products', () => {
        nav.loginPageNav()
        Funct.validLogin()
        Funct.WomenFilter()
      });
      it('[7] filtering men products', () => {
        nav.loginPageNav()
        Funct.validLogin()
        Funct.MenFilter()
        //could add assertion for dress name
      });
      it('[8] filtering kids products', () => {
        nav.loginPageNav()
        Funct.validLogin()
        Funct.KidsFilter()
        //could add assertion for dress name
      });
      it('[9] filtering polo products', () => {
        nav.loginPageNav()
        Funct.validLogin()
        Funct.PoloFilter()
        //could add assertion for dress name
      });
      it('[10] clicking on a product and adding it to cart', () => {
        nav.loginPageNav()
        Funct.validLogin()
        Funct.AddingProductToCart()
        //could add assertion for dress name
      });
      it('[11] clicking on a product and adding it to cart and checking it in cart and removing it', () => {
        nav.loginPageNav()
        Funct.validLogin()
        Funct.AddingProductToCart()
        nav.shoppingCartPage()
        Funct.RemovingFromCart()
        //could add assertion for dress name
      });
      it.only('[12] clicking on a product and adding it to cart and proceeding to checkout without logging in', () => {
        nav.homePage()
        Funct.AddingProductToCart()
        nav.shoppingCartPage()
        Funct.CheckoutWithoutLogin()
        
      });
      it('[13] clicking on a product and adding it to cart and proceeding to checkout', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        cy.visit("https://automationexercise.com")
        cy.get('a[href="/product_details/1"]').click()
        cy.url().should('eq',"https://automationexercise.com/product_details/1")
        cy.get('.product-information').should("contain.text","Blue Top")
        cy.get(':nth-child(5) > .btn').click();
        cy.get(".modal-content").should("be.exist")
        cy.get(".modal-footer > .btn").click();
        cy.get('a[href="/view_cart"]').eq(0).click();
        cy.url().should('eq',"https://automationexercise.com/view_cart")
        cy.get("#product-1").should("contain.text","Blue Top")
        cy.get('.col-sm-6 > .btn').click()
        cy.url().should('eq',"https://automationexercise.com/checkout")
        cy.get('a[href="/payment"]').click()
        cy.url().should('eq',"https://automationexercise.com/payment")
        cy.get('[data-qa="name-on-card"]').type("7amada")
        cy.get('[data-qa="card-number"]').type("3700 0000 0000 002")
        cy.get('[data-qa="cvc"]').type("212")
        cy.get('[data-qa="expiry-month"]').type("07")
        cy.get('[data-qa="expiry-year"]').type("2022")
        cy.get('[data-qa="pay-button"]').click()
        cy.url().should('contain',"https://automationexercise.com/payment_done")
   
      });
      it('[14] clicking on products and viewing products ', () => {
        cy.visit("https://automationexercise.com")
        cy.get('a[href="/products"]').click()
        cy.url().should('eq',"https://automationexercise.com/products")
        cy.get('.productinfo').eq(0).should("contain.text","Blue Top")

      });
      it('[15] clicking on products and searching for a product', () => {
        cy.visit("https://automationexercise.com")
        cy.get('a[href="/products"]').click()
        cy.url().should('eq',"https://automationexercise.com/products")
        cy.get('.productinfo').eq(0).should("contain.text","Blue Top")
        cy.get("#search_product").type("stylish")
        cy.get("#submit_search").click()
        cy.get('.productinfo').eq(0).should("contain.text","Stylish Dress")

      });
      it('[16] clicking on products and searching for a product then searching with empty search query', () => {
        cy.visit("https://automationexercise.com")
        cy.get('a[href="/products"]').click()
        cy.url().should('eq',"https://automationexercise.com/products")
        cy.get('.productinfo').eq(0).should("contain.text","Blue Top")
        cy.get("#search_product").type("stylish")
        cy.get("#submit_search").click()
        cy.get('.productinfo').eq(0).should("contain.text","Stylish Dress")
        cy.get("#search_product").clear()
        cy.get("#submit_search").click()
        cy.get('.productinfo').eq(0).should("contain.text","Blue Top")
        
      });
      it('[17] logging with correct data and then loggin out', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        cy.url().should('eq',"https://automationexercise.com/")
        cy.get('a[href="/logout"]').click()
        cy.url().should('eq',"https://automationexercise.com/login")
      });
      it('[18] clicking on an empty cart and then clicking on the view products button inside cart page', () => {
        cy.visit("https://automationexercise.com")
        cy.get('a[href="/view_cart"]').eq(0).click()
        cy.url().should('eq',"https://automationexercise.com/view_cart")
        cy.get("#empty_cart").should("be.exist");
        cy.get('u').click()
        cy.url().should('eq',"https://automationexercise.com/products")
       
      });
      it('[19] testing contact us form', () => {
        cy.visit("https://automationexercise.com/contact_us")
        cy.get('[data-qa="name"]').type("abdelrahman")
        cy.get('[data-qa="email"]').type("asdsd@gmail.com")
        cy.get('[data-qa="submit-button"]').click()
      });
      it('[20] testing subscribition text', () => {
        cy.visit("https://automationexercise.com")
        cy.get('#susbscribe_email').type("asdsd@gmail.com")
        cy.get('#subscribe').click()
       cy.get("#success-subscribe").should("be.exist")
      });
      
      

      
});


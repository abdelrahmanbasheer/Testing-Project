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
    
      it('[2] logging in with wrong pswd ', () => {
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
      it('[4] logging with correct data ', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        cy.url().should('eq',"https://automationexercise.com/")
      
      });
    
      it('[5] signing up with a preused email', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="signup-name"]').type("abdelrahman")
        cy.get('[data-qa="signup-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should("contain.text","Email Address already exist!") 
      });
      it('[6] filtering women products', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        // cy.url().should('eq',"https://automationexercise.com/")
        cy.get('a[href="#Women"]').click()
        cy.get('a[href="/category_products/1"]').click()
        cy.url().should('eq',"https://automationexercise.com/category_products/1")
        //could add assertion for dress name
      });
      it('[7] filtering men products', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        // cy.url().should('eq',"https://automationexercise.com/")
        cy.get('a[href="#Men"]').click()
        cy.get('a[href="/category_products/3"]').click()
        cy.url().should('eq',"https://automationexercise.com/category_products/3")
        //could add assertion for dress name
      });
      it('[8] filtering kids products', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        // cy.url().should('eq',"https://automationexercise.com/")
        cy.get('a[href="#Kids"]').click()
        cy.get('a[href="/category_products/4"]').click()
        cy.url().should('eq',"https://automationexercise.com/category_products/4")
        //could add assertion for dress name
      });
      it('[9] filtering polo products', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        // cy.url().should('eq',"https://automationexercise.com/")
        cy.get('a[href="/brand_products/Polo"]').click()
        cy.url().should('eq',"https://automationexercise.com/brand_products/Polo")
        cy.get('.product-information').should("contain.text","Blue Top")
        //could add assertion for dress name
      });
      it('[10] clicking on a product and adding it to cart', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        // cy.url().should('eq',"https://automationexercise.com/")
        cy.get('a[href="/product_details/1"]').click()
        cy.url().should('eq',"https://automationexercise.com/product_details/1")
        cy.get('.product-information').should("contain.text","Blue Top")
        cy.get(':nth-child(5) > .btn').click();
        cy.get(".modal-content").should("be.exist")
        cy.get(".modal-footer > .btn").click();
        //could add assertion for dress name
      });
      it('[11] clicking on a product and adding it to cart and checking it in cart and removing it', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("abdelrahmanbasheer72@gmail.com")
        cy.get('[data-qa="login-password"]').type("123456")
        cy.get('[data-qa="login-button"]').click()
        // cy.url().should('eq',"https://automationexercise.com/")
        cy.get('a[href="/product_details/1"]').click()
        cy.url().should('eq',"https://automationexercise.com/product_details/1")
        cy.get('.product-information').should("contain.text","Blue Top")
        cy.get(':nth-child(5) > .btn').click();
        cy.get(".modal-content").should("be.exist")
        cy.get(".modal-footer > .btn").click();
        cy.get('a[href="/view_cart"]').eq(0).click();
        cy.url().should('eq',"https://automationexercise.com/view_cart")
        cy.get("#product-1").should("contain.text","Blue Top")
        cy.get('#product-1 .cart_quantity_delete').click()
        cy.get("#empty_cart").should("be.exist");
        //could add assertion for dress name
      });
      it('[12] clicking on a product and adding it to cart and proceeding to checkout without logging in', () => {
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
        cy.get('.modal-content').should("contain.text","Register / Login account to proceed on checkout.")
      
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
      it.only('[20] testing subscribition text', () => {
        cy.visit("https://automationexercise.com")
        cy.get('#susbscribe_email').type("asdsd@gmail.com")
        cy.get('#subscribe').click()
       cy.get("#success-subscribe").should("be.exist")
      });
      
      

      
});


class sauceDemo
{
    validLogin(){
        cy.loginEmail("abdelrahmanbasheer72@gmail.com")
        cy.loginPswd("123456")
        cy.loginBtn()
        cy.EqUrl("https://automationexercise.com/")
    }
    FillContactUsForm(){
        cy.get('[data-qa="name"]').type("abdelrahman")
        cy.get('[data-qa="email"]').type("asdsd@gmail.com")
        cy.ButtonClick('[data-qa="submit-button"]')
    }
    FillSubscribtionForm(){
        cy.get('#susbscribe_email').type("asdsd@gmail.com")
        cy.get('#subscribe').click()
       cy.get("#success-subscribe").should("be.exist")
    }
    WomenFilter(){
        cy.ButtonClick('a[href="#Women"]')
        cy.ButtonClick('a[href="/category_products/1"]')
        cy.EqUrl("https://automationexercise.com/category_products/1")
    }
    MenFilter(){
        cy.ButtonClick('a[href="#Men"]')
       cy.ButtonClick('a[href="/category_products/3"]')
        cy.EqUrl("https://automationexercise.com/category_products/3")
    }
    CheckoutFormFill(){
        cy.get('[data-qa="name-on-card"]').type("7amada")
        cy.get('[data-qa="card-number"]').type("3700 0000 0000 002")
        cy.get('[data-qa="cvc"]').type("212")
        cy.get('[data-qa="expiry-month"]').type("07")
        cy.get('[data-qa="expiry-year"]').type("2022")
      
    }
    KidsFilter(){
        cy.ButtonClick('a[href="#Kids"]')
       cy.ButtonClick('a[href="/category_products/4"]')
        cy.EqUrl("https://automationexercise.com/category_products/4")
    }
    Search(){
        cy.get("#search_product").type("stylish")
        cy.ButtonClick("#submit_search")
        cy.get('.productinfo').eq(0).should("contain.text","Stylish Dress")
    }
    ClearSearch(){
        cy.get("#search_product").clear()
        cy.ButtonClick("#submit_search")
    }    
    PoloFilter(){
        cy.ButtonClick('a[href="/brand_products/Polo"]')
        cy.EqUrl("https://automationexercise.com/brand_products/Polo")
    }
    AddingProductToCart(){
        cy.ButtonClick('a[href="/product_details/1"]')
        cy.EqUrl("https://automationexercise.com/product_details/1")
        cy.ProductInfo("Blue Top")
        cy.ButtonClick(':nth-child(5) > .btn')
        cy.ExistBe(".modal-content")
        cy.ButtonClick(".modal-footer > .btn")
    }
    RemovingFromCart(){
        cy.get("#product-1").should("contain.text","Blue Top")
        cy.ButtonClick('#product-1 .cart_quantity_delete')
        cy.ExistBe("#empty_cart")
    }
    CheckoutWithoutLogin(){
        cy.get("#product-1").should("contain.text","Blue Top")
        cy.ButtonClick('.col-sm-6 > .btn')
        cy.get('.modal-content').should("contain.text","Register / Login account to proceed on checkout.")
    }
    validSignup(){
        cy.SignupEmail()
        cy.SignupName()
        cy.SignupBtn()
        cy.EqUrl("https://automationexercise.com/signup")
        cy.get('#id_gender1').check();
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
        cy.EqUrl('https://automationexercise.com/account_created')
    }
    preusedEmailsignup(){
        cy.SignupName()
        cy.SignupEmail()
        cy.SignupBtn()
        cy.get('.signup-form > form > p').should("contain.text","Email Address already exist!") 
    }
    wrongEmailLogin(){
        cy.loginEmail("abdelrahmanbasheer@gmail.com")
        cy.loginPswd("12345")
        cy.loginBtn()
        cy.get('.login-form > form > p').should("contain.text","Your email or password is incorrect!")  
    }
    wrongPswdLogin(){
        cy.loginEmail("abdelrahmanbasheer72@gmail.com")
        cy.loginPswd("12345")
        cy.loginBtn()
        cy.get('.login-form > form > p').should("contain.text","Your email or password is incorrect!")  
    }
}
export default sauceDemo
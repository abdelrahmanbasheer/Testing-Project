class sauceDemo
{
    validLogin(){
        cy.loginEmail("abdelrahmanbasheer72@gmail.com")
        cy.loginPswd("123456")
        cy.loginBtn()
        cy.EqUrl("https://automationexercise.com/")
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
    KidsFilter(){
        cy.ButtonClick('a[href="#Kids"]')
       cy.ButtonClick('a[href="/category_products/4"]')
        cy.EqUrl("https://automationexercise.com/category_products/4")
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
    validCheckoutForm(){
        cy.get('[data-test="firstName"]').type("abdo").should("have.value","abdo")
        cy.get('[data-test="lastName"]').type("7amada").should("have.value","7amada")
        cy.get('[data-test="postalCode"]').type("123").should("have.value","123")
        cy.get('[data-test="continue"]').click()
        cy.url().should("eq","https://www.saucedemo.com/checkout-step-two.html")
        cy.get('#root .header_secondary_container').should("contain.text","Checkout: Overview")
    }
    addingFirstItemFromHomePage(){
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get('#shopping_cart_container .shopping_cart_badge').should('contain.html',"1");
    }
    addingSecondItem(){
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
        cy.get('#shopping_cart_container .shopping_cart_badge').should('contain.html',"2");
    }
    invalidLogin(){
        cy.userName("standard_user")
        cy.password("7amada")
        cy.loginBtn()
        cy.get('.error-message-container').should("contain.text","Epic sadface: Username and password do not match any user in this service")
    }
    removingItemFromCart(){
        cy.get('.cart_item .inventory_item_name').should('contain.html',"Sauce Labs Backpack")
        cy.get('[data-test="remove-sauce-labs-backpack"]').should("contain.text","Remove")
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.cart_list .removed_cart_item').should('contain.html',"")
    }
    ZtoAFilter(){
        cy.selectorFn("Name (Z to A)")
        cy.get('#inventory_container .inventory_item').eq(0).should('contain.html',"Test.allTheThings() T-Shirt (Red)");
    }
    priceLowToHighFilter(){
    cy.selectorFn("Price (low to high)")
    cy.get('#inventory_container .inventory_item').eq(0).should('contain.html',"Sauce Labs Onesie");
    }
    priceHighToLowFilter(){
        cy.selectorFn("Price (high to low)")
    cy.get('#inventory_container .inventory_item').eq(0).should('contain.html',"Sauce Labs Fleece Jacket");
        
    }
}
export default sauceDemo
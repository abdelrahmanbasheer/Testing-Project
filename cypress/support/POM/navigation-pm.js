class Navigation
{
    loginPageNav(){
        cy.visit("https://automationexercise.com/login")
    }
    logoutPageNav(){
        cy.visit("https://automationexercise.com/logout")
    }
    homePage(){
        cy.visit("https://automationexercise.com")
    }
    cartPage(){
        cy.visit("https://automationexercise.com/view_cart")
    }
    FirstProductPage(){
        cy.ButtonClick('a[href="/product_details/1"]')
        cy.EqUrl("https://automationexercise.com/product_details/1")
    }
    shoppingCartPage(){
        cy.get('a[href="/view_cart"]').eq(0).click();
        cy.EqUrl("https://automationexercise.com/view_cart")
    }
    paymentSuccessPage(){
        cy.ButtonClick('[data-qa="pay-button"]')
        cy.url().should('contain',"https://automationexercise.com/payment_done")
    }
    ContactUsPage(){
        cy.visit("https://automationexercise.com/contact_us")
    }
    ViewProductsInsideCartPage(){
        cy.get('u').click()
        cy.url().should('eq',"https://automationexercise.com/products")
    }
    ProductsPage(){
        cy.ButtonClick('a[href="/products"]')
        cy.EqUrl("https://automationexercise.com/products")
        cy.get('.productinfo').eq(0).should("contain.text","Blue Top")
    }
    nthProductPage(n){
        cy.ButtonClick('a[href="/product_details/' + n + '"]')
        cy.EqUrl("https://automationexercise.com/product_details/" + n)
    }
    checkoutPage(){
        cy.get('a[href="/payment"]').click()
        cy.url().should('eq',"https://automationexercise.com/payment")
    }
    logoutPage(){
        cy.get('a[href="/logout"]').click()
        cy.url().should('eq',"https://automationexercise.com/login")
    }
    videosPage(){
        cy.get('a[href="https://www.youtube.com/c/AutomationExercise"]').click()
        cy.url().should('eq',"https://www.youtube.com/c/AutomationExercise")
    }
}
export default Navigation
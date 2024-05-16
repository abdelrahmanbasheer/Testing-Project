class Navigation
{
    loginPageNav(){
        cy.visit("https://automationexercise.com/login")
    }
    homePage(){
        cy.visit("https://automationexercise.com")
    }
    shoppingCartPage(){
        cy.get('a[href="/view_cart"]').eq(0).click();
        cy.EqUrl("https://automationexercise.com/view_cart")
    }
    firstCheckoutPage(){
        cy.get('[data-test="checkout"]').click()
        cy.url().should("eq","https://www.saucedemo.com/checkout-step-one.html")
    }
    secondCheckoutPage(){
        cy.get('[data-test="finish"]').click()
        cy.url().should("eq","https://www.saucedemo.com/checkout-complete.html")
        cy.get('#root .header_secondary_container').should("contain.text","Checkout: Complete!")
    }
    backToProductsPage(){
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should("eq","https://www.saucedemo.com/inventory.html")
    cy.get('#inventory_container .inventory_item').eq(0).should('contain.html',"Sauce Labs Backpack");
    }
    logoutPage(){
        cy.get("#menu_button_container #react-burger-menu-btn").click()
        cy.get(".bm-menu #logout_sidebar_link").click()
        cy.url().should("eq","https://www.saucedemo.com/")
    }
}
export default Navigation
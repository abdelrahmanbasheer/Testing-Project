import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav = new Navigation()
const Funct = new sauceDemo()

describe('SauceDemo', () => {
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
  it('[12] clicking on a product and adding it to cart and proceeding to checkout without logging in', () => {
    nav.homePage()
    Funct.AddingProductToCart()
    nav.shoppingCartPage()
    Funct.CheckoutWithoutLogin()
    
  });
  it('[13] clicking on a product and adding it to cart and proceeding to checkout while logged in', () => {
    nav.loginPageNav()
    Funct.validLogin()
    Funct.AddingProductToCart()
    nav.shoppingCartPage()
    cy.get("#product-1").should("contain.text","Blue Top")
    cy.get('.col-sm-6 > .btn').click()
    nav.checkoutPage()
    Funct.CheckoutFormFill()
    nav.paymentSuccessPage()
  });
  it('[14] clicking on products and viewing products ', () => {
    nav.homePage()
    nav.ProductsPage()
  });
  it('[15] clicking on products and searching for a product', () => {
    nav.homePage()
    nav.ProductsPage()
    Funct.Search()
  });
  it('[16] clicking on products and searching for a product then searching with empty search query', () => {
    nav.homePage()
    nav.ProductsPage()
    Funct.Search()
    Funct.ClearSearch();
    cy.get('.productinfo').eq(0).should("contain.text","Blue Top")
  });
  it('[18] clicking on an empty cart and then clicking on the view products button inside cart page', () => {
    nav.homePage()
    nav.cartPage()
    cy.ExistBe("#empty_cart")
    nav.ViewProductsInsideCartPage()
  });
});


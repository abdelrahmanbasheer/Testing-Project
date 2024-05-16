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
  it('[14] clicking on products and viewing products', () => {
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
  it('[26] visit products pages', () => {
    nav.homePage()
    for (let i = 1; i < 7; ++i) {
      nav.ProductsPage()
      nav.nthProductPage(i)
    }
  });
  it('[27] add review on products while leaving username empty', () => {
    nav.homePage()
    nav.ProductsPage()
    nav.nthProductPage(6)
    Funct.writeReview("", "asda@gm", "dfgfgdf");
    cy.get("#email").invoke('text').then((text) => {
      assert(text.length == 0, "empty username should be invalid")
    })
  });
  it('[28] add review on products while leaving email empty', () => {
    nav.homePage()
    nav.ProductsPage()
    nav.nthProductPage(6)
    Funct.writeReview("sfdsfdf", "", "dfgfgdf");
    cy.get("#name").invoke('text').then((text) => {
      assert(text.length == 0, "empty email should be invalid")
    })
  });
  it('[29] add review on products while leaving review empty', () => {
    nav.homePage()
    nav.ProductsPage()
    nav.nthProductPage(6)
    Funct.writeReview("sfdsfdf", "asda@gm", "");
    cy.get("#name").invoke('text').then((text) => {
      assert(text.length == 0, "empty review should be invalid")
    })
  });
  it('[30] add review on products with invalid email', () => {
    nav.homePage()
    nav.ProductsPage()
    nav.nthProductPage(6)
    Funct.writeReview("sfdsfdf", "asdagm", "");
    cy.get("#name").invoke('text').then((text) => {
      assert(text.length == 0, "only valid emails should work")
    })
  });
  it.only('[31] add review on products with valid data', () => {
    nav.homePage()
    nav.ProductsPage()
    nav.nthProductPage(6)
    Funct.writeReview("sfdsfdf", "asda@gm", "dsfd");
    cy.contains("Thank you for your review.").should("exist")
  });
});


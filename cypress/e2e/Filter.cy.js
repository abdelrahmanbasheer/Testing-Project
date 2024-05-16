import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav = new Navigation()
const Funct = new sauceDemo()

describe('Filter Functions', () => {
  beforeEach(() => {
    nav.loginPageNav()
    Funct.validLogin()
  });
  it('[6] filtering women products', () => {
    Funct.WomenFilter()
    cy.verifyProductExists(3)
    cy.verifyProductDoesntExist(1)
  });
  it('[7] filtering men products', () => {
    Funct.MenFilter()
    cy.verifyProductExists(2)
    cy.verifyProductDoesntExist(1)
  });
  it('[8] filtering kids products', () => {
    Funct.KidsFilter()
    cy.verifyProductExists(16)
    cy.verifyProductDoesntExist(1)
  });
  it('[9] filtering polo products', () => {
    Funct.brandFilter("Polo")
    cy.verifyProductExists(1)
    cy.verifyProductDoesntExist(2)
  });
  it('[32] filtering h&m products', () => {
    Funct.brandFilter("H&M")
    cy.verifyProductExists(2)
    cy.verifyProductDoesntExist(1)
  });
  it('[33] filtering madame products', () => {
    Funct.brandFilter("Madame")
    cy.verifyProductExists(3)
    cy.verifyProductDoesntExist(1)
  });
  it('[34] filtering mast and harbour products', () => {
    Funct.brandFilter("Mast & Harbour")
    cy.verifyProductExists(5)
    cy.verifyProductDoesntExist(1)
  });
  it('[35] filtering babyhug products', () => {
    Funct.brandFilter("Babyhug")
    cy.verifyProductExists(11)
    cy.verifyProductDoesntExist(1)
  });
  it('[36] filtering allen solly junior products', () => {
    Funct.brandFilter("Allen Solly Junior")
    cy.verifyProductExists(13)
    cy.verifyProductDoesntExist(1)
  });
  it('[37] filtering kookie kids products', () => {
    Funct.brandFilter("Kookie Kids")
    cy.verifyProductExists(14)
    cy.verifyProductDoesntExist(1)
  });
  it('[38] filtering biba products', () => {
    Funct.brandFilter("Biba")
    cy.verifyProductExists(21)
    cy.verifyProductDoesntExist(1)
  });
});
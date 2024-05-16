import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav = new Navigation()
const Funct = new sauceDemo()

describe('Filter Functions', () => {
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
});
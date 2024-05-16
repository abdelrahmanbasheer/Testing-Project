import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav = new Navigation()
const Funct = new sauceDemo()
describe('Login Functionality', () => {
  it('[2] logging in with wrong password and correct email', () => {
    nav.loginPageNav()
    Funct.wrongLogin("abdelrahmanbasheer72@gmail.com", "12345")
  });
  it('[3] logging in with wrong email and correct password', () => {
    nav.loginPageNav()
    Funct.wrongLogin("abdelrahmanbasheer@gmail.com", "123456")
  });
  it('[24] logging in with wrong email and wrong password', () => {
    nav.loginPageNav()
    Funct.wrongLogin("abdelrahmanbasheer@gmail.com", "12345")
  });
  it('[4] logging in with correct email and correct password', () => {
    nav.loginPageNav()
    Funct.validLogin()
  });
  it('[17] logging with correct data and then loggin out', () => {
    nav.loginPageNav()
    Funct.validLogin()
    nav.logoutPage()
  });
  it('[23] try logging in using deleted account', () => {
    nav.loginPageNav()
    let email = Funct.validSignup()
    nav.homePage()
    Funct.deleteAccount();
    nav.loginPageNav();
    Funct.wrongLogin(email, "123456")
  });
});
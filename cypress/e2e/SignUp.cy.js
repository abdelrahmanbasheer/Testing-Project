import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav = new Navigation()
const Funct = new sauceDemo()

describe('SignUp functionalities', () => {
  it('[1] signing up with a positive scenario', () => {
    nav.loginPageNav()
    Funct.validSignup()
  });
  it('[5] signing up with a preused email', () => {
    nav.loginPageNav()
    Funct.preusedEmailsignup()
  });
  it('[21] create account then delete it', () => {
    nav.loginPageNav()
    Funct.validSignup()
    nav.homePage()
    Funct.deleteAccount();
  });
  it('[22] try create account with an email of a deleted one', () => {
    nav.loginPageNav()
    let email = Funct.validSignup()
    nav.homePage()
    Funct.deleteAccount();
    nav.loginPageNav();
    Funct.validSignup(email);
  });
});
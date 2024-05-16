import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav= new Navigation()
const Funct=new sauceDemo()
describe('Login Functionality', () => {
    it('[2] logging in with wrong pswd ', () => {
        nav.loginPageNav()
        Funct.wrongPswdLogin()
      });
      it('[3] logging in with wrong email ', () => {
        nav.loginPageNav()
        Funct.wrongEmailLogin()
      });
      it('[4] logging in with correct data ', () => {
        nav.loginPageNav()
        Funct.validLogin()
      });
});
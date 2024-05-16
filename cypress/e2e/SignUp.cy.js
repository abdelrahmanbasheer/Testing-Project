import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav= new Navigation()
const Funct=new sauceDemo()

describe('SignUp functionalities', () => {
    it('[1] signing up with a positive scenario', () => {
        nav.loginPageNav()
        Funct.validSignup()
      });
      it('[5] signing up with a preused email', () => {
        nav.loginPageNav()
        Funct.preusedEmailsignup()
      });
});
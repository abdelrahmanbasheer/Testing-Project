import Navigation from "../support/POM/Navigation-pm";
import sauceDemo from "../support/POM/sauceDemo-pom";

const nav = new Navigation()
const Funct = new sauceDemo()

describe('SauceDemo', () => {
  it('[19] testing contact us form', () => {
    nav.ContactUsPage()
    Funct.FillContactUsForm()
  });
  it('[20] testing subscribition text', () => {
    nav.homePage()
    Funct.FillSubscribtionForm()
  });
  it('[25] testing video tutorials', () => {
    nav.videosPage()
  });
});


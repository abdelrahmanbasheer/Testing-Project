const { Given, When, Then } = require('@cucumber/cucumber');

import Navigation from "../POM/Navigation-pm";
import sauceDemo from "../POM/sauceDemo-pom";

const nav = new Navigation()
const Funct = new sauceDemo()

Given('Navigate to contactus page', () => {
    nav.ContactUsPage()
})
Then('User fills contactus form', () => {
    Funct.FillContactUsForm()
})
class webdriver
{
    contactUsPageNav(){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
            cy.title().should("eq","WebDriver | Contact Us");
    }
    positiveContactUsScenario(){
        cy.firstName("abdo")
        cy.lastName("7amada")
        cy.email("7amada@gmail.com")
        cy.comment("hello cypress")
        cy.get(".contact_button").last().click()
        cy.url().should('eq',"https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html")
        cy.title().should("include","Gianni")
    }
   
}
export default webdriver
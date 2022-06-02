// to able cypress intellisense 
/// <reference types="Cypress" />

// describ is like a collection of tests
describe("Sign up", () => {

    //Title for the test
    it("register a new user", () => {
      
      // Some variable to fill in the sign up form
      const email = "dada@sese.se";
      const password = "visiting";
  
      // On which url the test be done
      cy.visit("/");
      cy.contains("a", "Sign Up!").click();
      
      cy.location('pathname').should('equal', '/SignUpForm')
  
      cy.get("[data-cy=email").type(email);
      cy.get("[data-cy=password").type(password);
      cy.get("form").submit();
  
      cy.location('pathname').should('equal', '/SignUpForm')
    })
})
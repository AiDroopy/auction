/// <reference types="Cypress" />

describe("login test suite", () => {
  it("does not work with wrong credentials", () => {
    cy.visit("http://localhost:3000");
    cy.contains("a", "Login").click();
    cy.get('[data-cy="username').type("info");
    cy.get('[data-cy="password').type("visitor");
    cy.get("[data-cy=login-form").submit();
    cy.contains('.error-messages li', 'email must be valid')
  });

  it("does work with right credentials", () => {
    cy.visit("http://localhost:3000");
    cy.contains("a", "Login").click();
    cy.get('[data-cy="username').type("delmon@baho.se");
    cy.get('[data-cy="password').type("123456");
    cy.get("[data-cy=login-form").submit();
    
  });
});

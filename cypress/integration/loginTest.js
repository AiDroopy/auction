/// <reference types="Cypress" />

describe("login test suite", () => {
  it("does work with right credentials", () => {
    cy.login()
  });
});

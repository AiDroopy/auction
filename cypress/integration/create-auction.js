describe("create an auction", () => {
  it("Test a post method to create an auction", () => {
    cy.login();
    cy.contains('a', 'Home').click();
    cy.contains('h2', 'Create auction!').click();

  });
});

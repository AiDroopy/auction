describe("Logout", () => {
    it("Logout user", () => {
      cy.login()

      cy.contains("a", "Log Out").click();
    });
  });
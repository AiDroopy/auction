


Cypress.Commands.add('login', () => {
    cy.visit("http://localhost:3000");
    cy.contains("a", "Login").click();
    cy.get('[data-cy="username').type("delmon@baho.se");
    cy.get('[data-cy="password').type("123456");
    

    const currentUser = {
      id: "6260f7ccdf970535df9f7c1e",

      username: "delmon@baho.se",

      roles: ["ROLE_USER"],

      accessToken:
        "$2a$10$qpS5NC6bLV1N77GOx80buO..r8q6jAcSZ/iCO09f5J714yZ8PDUOO",
      tokenType: "Bearer",
    };
  
      localStorage.setItem("user", JSON.stringify(currentUser));
      cy.get("[data-cy=submit").click();
      cy.location('pathname').should('equal', '/profile')
})
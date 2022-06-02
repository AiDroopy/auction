import 'cypress-file-upload';

// Auction
const auction2 = {
  userId:"1",
  productName: "En super exklusive klocka",
  productInfo: "Lyx",
  startPrice: 10000,
  endTime: "",
  endPrice: 0,
}

// Data for localstorage (currentUser)
const currentUser = {
  id: "6260f7ccdf970535df9f7c1e",

  username: "delmon@baho.se",

  roles: ["ROLE_USER"],

  accessToken:
    "$2a$10$qpS5NC6bLV1N77GOx80buO..r8q6jAcSZ/iCO09f5J714yZ8PDUOO",
  tokenType: "Bearer",
};

// Login commands
Cypress.Commands.add('login', () => {
    cy.visit("/");
    cy.contains("a", "Login").click();
    cy.get('[data-cy="username').type("delmon@baho.se");
    cy.get('[data-cy="password').type("123456");

      // Store currentUser in Localstorage and Login
      localStorage.setItem("user", JSON.stringify(currentUser));
      cy.get("[data-cy=submit").click();
      cy.location('pathname').should('equal', '/profile')
})

/* 
Cypress.Commands.add('createAuction', () => {
  cy.visit("/");
      
      // Login in user
      cy.login()
      
      // Locate to create auction
      cy.contains("a", "Home").click();
      cy.contains("a", "Create auction!").click();
      
      
      // Type Create auction Form and submit
      cy.get('input[name="productName"]').type(`${auction2.productName}`)
      cy.get('input[name="startPrice"]').type(`${auction2.startPrice}`)
      cy.get('input[name="productInfo"]').type(`${auction2.productInfo}`)
      
      //Upload file to the input field and create an auction
      cy.get('input[type="file"]').attachFile('rolex.jpg')
      cy.get('button[type="submit"]').click();
      localStorage.setItem("auction", JSON.stringify(auction2));
})
 */
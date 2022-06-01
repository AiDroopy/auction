    const auction = {
    userId:"627ea2300047271a495806f9",
    productName: "Fin Klocka",
    productInfo: "good shape",
    startPrice: 10,
    endTime: "",
    endPrice: 0,
}
describe("login test suite", () => {

    it("does work with right credentials", () => {
  
      cy.visit("http://localhost:3000");
  
      // Login in user
      cy.contains("a", "Login").click();
      cy.get('[data-cy="username').type("dej@dej.se");
      cy.get('[data-cy="password').type("123456");
      cy.contains('.submit', "Login").click();

      // Locate to create auction
      cy.contains("a", "Home").click();
      cy.contains("a", "Create auction!").click();
     
      // Type Create auction Form and submit
      cy.get('input[name="productName"]').type(`${auction.productName}`)
      cy.get('input[name="startPrice"]').type(`${auction.startPrice}`)
      cy.get('input[name="productInfo"]').type(`${auction.productInfo}`)

      //Upload file to the input field and create an auction
      cy.get('input[type="file"]').attachFile('klocka.jpg')
      cy.get('button[type="submit"]').click();

  
      // Store user as localstorage!
      const currentUser = {
  
        id: "6260f7ccdf970535df9f7c1e",
  
        username: "dej@dej.se",

  
        roles: ["ROLE_USER"],

        accessToken:
  
          "$2a$10$qpS5NC6bLV1N77GOx80buO..r8q6jAcSZ/iCO09f5J714yZ8PDUOO",
  
        tokenType: "Bearer",
  
      };
  
        localStorage.setItem("user", JSON.stringify(currentUser));     
  
    });
  
  });


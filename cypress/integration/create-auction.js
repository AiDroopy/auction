const auction1 = {
    userId:"6260f7ccdf970535df9f7c1e",
    productName: "Fin Klocka",
    productInfo: "good shape",
    startPrice: 10,
    endTime: "",
    endPrice: 0,
}


describe("login test suite", () => {
    it("does work with right credentials", () => {
      cy.visit("/");
      
      // Login in user
      cy.login()
      
      // Locate to create auction
      cy.contains("a", "Home").click();
      cy.contains("a", "Create auction!").click();
      
      
      // Type Create auction Form and submit
      cy.get('input[name="productName"]').type(`${auction1.productName}`)
      cy.get('input[name="startPrice"]').type(`${auction1.startPrice}`)
      cy.get('input[name="productInfo"]').type(`${auction1.productInfo}`)
      
      //Upload file to the input field and create an auction
      cy.get('input[type="file"]').attachFile('klocka.jpg')
      cy.get('button[type="submit"]').click();
      
    })});

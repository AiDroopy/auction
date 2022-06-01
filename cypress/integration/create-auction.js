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
      cy.login()
      
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
    })});

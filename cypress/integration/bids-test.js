const user = {
    id: "6260f7ccdf970535df9f7c1e"
};

  const auction1 = {
    userId:"6260f7ccdf970535df9f7c1e",
    productName: "Fin Klocka",
    productInfo: "good shape",
    startPrice: 10,
    endTime: "",
    endPrice: 0,
}


const auction2 = {
    userId:"1",
    productName: "En super exklusive klocka",
    productInfo: "Lyx",
    startPrice: 10000,
    endTime: "",
    endPrice: 0,
  }

describe("Bid", () => {
    it("Test a bid", () => {

    cy.visit("/");
      
    // Login in user
    cy.login()


    // Create auction 2 with same id as user
    cy.contains("a", "Home").click();
    cy.contains("a", "Create auction!").click();
    cy.get('input[name="productName"]').type(`${auction1.productName}`)
    cy.get('input[name="startPrice"]').type(`${auction1.startPrice}`)
    cy.get('input[name="productInfo"]').type(`${auction1.productInfo}`)
    cy.get('input[type="file"]').attachFile('klocka.jpg')
    cy.get('button[type="submit"]').click();
    




    // Create auction 2 not same id as user
    cy.contains("a", "Home").click();
    cy.contains("a", "Create auction!").click();
    cy.get('input[name="productName"]').type(`${auction2.productName}`)
    cy.get('input[name="startPrice"]').type(`${auction2.startPrice}`)
    cy.get('input[name="productInfo"]').type(`${auction2.productInfo}`)
    cy.get('input[type="file"]').attachFile('rolex.jpg')
    cy.get('button[type="submit"]').click();
    
        
    
    if(auction2.userId != user.id){
        //window.location.reload();
        cy.get('input[name="amount"]').type(1200)
        cy.get('button[type="submit"]').click();

    } else{

        console.log("Fail")

    }
   

     

 

    });
  });
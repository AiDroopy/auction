

describe('create an auction', () => {
    
    const auction = {
    userId:"1",
    productName: "Fin Clock",
    productInfo: "good shape",
    startPrice: 10,
    endTime: "",
    endPrice: 0,
}

    it('Test a post method to create an auction', () =>{
    cy.request('GET', 'http://localhost:8080/api/auction/all').its('body').to.be.a('object')
})
})
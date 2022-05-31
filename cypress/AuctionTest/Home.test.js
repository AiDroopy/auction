
describe("/Home", () => {
    it ("NavBar", () => {
        cy.visit("/")
        cy.get(".nav").should("exist")
    })

    it("option", () => {
        cy.visit("/")
        cy.get(".nav_left").find("h2")
    })

    it("AuctionList", () => {
        cy.visit("/")
        cy.get(".auctions").should("exist")
    })


    it("Navigate to search", () => {
        cy.visit("/")
        cy.get(".all-search").contains("Search")
    })

})
const home = "http://localhost:3000"
describe("/Home", () => {
    it ("NavBar", () => {
        cy.visit("/")
        cy.get(".nav").should("exist")
    })


    //testing options in Navbar
    it("option", () => {
        cy.visit(home)
        cy.get(".nav_left").find("h2")
    })


    //testing if auctions is exist
    it("AuctionList", () => {
        cy.visit("/")
        cy.get(".auction-List").should("exist")
    })

    //if you can navigate from home page to the other pages
    

    it("Navigate to all auctions in homepage", () => {
        cy.visit("/")
        cy.get(".all-auctions").contains("Auctions")
    })


    it("Navigate to search", () => {
        cy.visit("/")
        cy.get(".all-search").contains("Search")
    })


    /* it("Navigate to delivery form", () => {
        cy.visit("/")
        cy.get(".all-delivery").contains("Shipment Info")
    }) */


    it("Navigate to Login", () => {
        cy.visit("/")
        cy.get(".my-login").contains("Login")
    })


    it("Navigate to profile", () => {
        cy.visit("/")
        cy.get(".my-profile").contains("Profile")
    })


    it("Navigate to Sign up form", () => {
        cy.visit("/")
        cy.get(".my-signup").contains("Sign Up")
    })


    it("Navigate to create auction for", () => {
        cy.visit("/")
        cy.get(".my-auction").contains("Create Auction")
    })


})
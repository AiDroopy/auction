it('check all links on page', () => {

    cy.visit('/')
    cy.get('a').each(page => {
      cy.request(page.prop('href'))})});


it("AuctionList", () => {

    cy.visit("/")

    cy.get(".auction-List").should("exist")

    })
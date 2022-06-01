it('check all links on page', () => {

    cy.visit('/')
    cy.get('a').each(page => {
      cy.request(page.prop('href'))})});
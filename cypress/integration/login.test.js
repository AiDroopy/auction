describe('login', () =>{

    it('user login',()=>{
        const username = 'eva@test.se'
        const password = '123visit'

        cy.visit('http://localhost:3000')
        cy.contains('a', "login").click
        cy.get('form').submit()
        cy.get('input[type="email"]').should('have.value', 'Username')
        cy.get('input[type="password"]').should('have.value', 'Password')
        


        


    })
})
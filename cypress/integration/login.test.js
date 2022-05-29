
describe('login', () =>{

    it('user login',()=>{

        const email = 'dada@sese.se'
        const password = 'visiting'

        cy.visit('http://localhost:3000')
        cy.contains('h2', 'Login').click()
        cy.get('form').submit()
       
        cy.get('[name=username]').type(email)
        cy.get('[name=password]').type(password)



    })
})
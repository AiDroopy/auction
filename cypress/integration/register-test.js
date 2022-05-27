/// <reference types="Cypress" />

describe('Sign up', () => {
    it('register a new user', () => {
        const email = 'dada'
        const password = 'visiting'

        cy.visit('http://localhost:3000')
        cy.contains('a', 'Sign Up!').click()

        cy.visit('http://localhost:3000/SignUpForm')
        cy.get('[data-cy=email').type(email)
        cy.get('[data-cy=password').type(password)
        cy.get('form').submit()
    });
})
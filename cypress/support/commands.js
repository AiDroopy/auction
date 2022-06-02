// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --





    const currentUser = {
        id: "6260f7ccdf970535df9f7c1e",
      
        username: "lola@mail.com",
      
        roles: ["ROLE_USER"],
      
        accessToken:
          "$2a$10$h1heXMWLDVY7A97JhYu4q...il0FlioX8gon084ytysyDO0iE/4hq",
        tokenType: "Bearer",
      }
   
      // Login commands
      Cypress.Commands.add('login', () => {
          cy.visit("/")
         
          //cy.get('[data-cy=username]').type("lola@mail.se");
          //cy.get('[data-cy=password]').type("hello");

            // Store currentUser in Localstorage and Login
            localStorage.setItem("user", JSON.stringify(currentUser))
          
      })
    

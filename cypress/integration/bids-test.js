/// <reference types="Cypress" />

describe('Add bid', () =>{
    
   it('makes bid', ()=> {

      const amount = 'value'
      cy.contains('button','Bid').submit
      cy.get('[number=amount]').type(amount)
   })
   
  })



       



        



  //  })

//})
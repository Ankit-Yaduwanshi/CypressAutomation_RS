/ <reference types="Cypress" />
describe('First Feature', () => {
it('First Scenario or Test case', () => {
cy.visit('https://example.cypress.io')
})

it('Second scenario', () => {
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//cy.get('.product').should('have.length',4)
//using jquery visible property to handle invisible elements
cy.get('.product:visible').should('have.length',4)

//Parent child chaining using get() and find()
cy.get('.products').find('.product').should('have.length',4)

cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
})
})
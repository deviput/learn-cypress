describe('Login Test', () => {
  it('passes', () => {
    cy.visit('https://neira.id/')
    cy.get('.header__icon--account').click()
    cy.get('#CustomerEmail').type('devifajar2424@gmail.com')
    cy.get('#CustomerPassword').type('f170924')
    cy.get('#customer_login button').click()
    cy.get('.customer.account h1').should('contain', 'Account')
  })
})
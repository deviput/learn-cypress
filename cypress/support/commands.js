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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').check()
    cy.get('.form-actions .btn-primary').click()
})

Cypress.Commands.add('PayBills', (payee, account, amount, date, description) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#sp_payee').select(payee)
    cy.get('#sp_account').select(account)
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').type(date)
    cy.get('#sp_amount').click()
    cy.get('#sp_description').type(description)
    cy.get('#pay_saved_payees').click()
    cy.get('.page-header h3').should('contain', 'Log in to ZeroBank')
})

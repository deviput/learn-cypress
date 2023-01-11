/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        const username = 'usernames.example.com'
        const password = 'passwords.example.com'
        cy.login(username, password)
    });
});
it('should check Keep me signed in', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.get('#user_remember_me').check()
    cy.get('#user_remember_me').uncheck()
    it('should click button sign in', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('.form-actions .btn-primary').click()
    });
});
it('should try to login', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.fixture("user").then(user => {
        const username5 = user.username5
        const password5 = user.password5
        const payee = user.payee
        const account = user.account
        const amount = user.amount
        const date = user.date
        const description = user.description
        cy.login(username5, password5)
        cy.get('a').contains('Pay Bills').click()
        cy.PayBills(payee, account, amount, date, description)
    })
});

/// <reference types="cypress" />

describe('Working with inputs', () => {

    before(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

    it('Should try to login', () => {
        cy.fixture("users.json").then(user => {
            cy.login(user.username, user.password)
            cy.get('a').contains('Pay Bills').click()
            cy.PayBills(user.payee, user.account, user.amount, user.date, user.description)

        })
    })

});
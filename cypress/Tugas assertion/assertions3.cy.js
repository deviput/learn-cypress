describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', 'example.cypress.io')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('devifajar2424@gmail.com')
            .should('have.value', 'devifajar2424@gmail.com')
<<<<<<< HEAD
    })
})
=======
    }
}
>>>>>>> 5d8f02bd0bcf8ac8063fa484185256747f964c73

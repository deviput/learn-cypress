describe("My Test", () => {
    it("Uses fixture data", () => {
        const users = cy.fixture('users.json')
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type(users.standard_user.username);
        cy.get('#password').type(users.standard_user.password);
        cy.get('#login-button').click();
    });
});
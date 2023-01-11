describe('Login', () => {
    it('Should login with standard_user', () => {
        const users = cy.fixture('users');
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type(users.standard_user.username);
        cy.get('#password').type(users.standard_user.password);
        cy.get('#login-button').click();
    });
});
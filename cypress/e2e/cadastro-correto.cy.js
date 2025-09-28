describe('Página de cadastro e gerenciamento', () => {
    beforeEach(() => {
        cy.visit('https://provaqa.fandi.com.br/');
    });
});

it('Clicar em começar', () => {
    cy.get('button, .btn btn-popup').click();
});
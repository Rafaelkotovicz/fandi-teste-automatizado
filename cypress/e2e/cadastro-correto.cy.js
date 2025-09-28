const { it } = require("mocha");

describe('Página de cadastro e gerenciamento', () => {
    //sempre é executado antes do teste caso haja mais de um teste que precise do acesso a essa página
    beforeEach(() => {
        cy.visit('https://provaqa.fandi.com.br/');
        cy.get('button, .btn btn-popup').click();
    });

    it('Cadastro correto de novo modelo', () => {
    // Abrir formulário de cadastro
    cy.contains('button', 'Novo modelo').click();

    // Preencher os campos necessários para o cadastro
    cy.get('select[name="fabricante"]').select('CHEVROLET');
    cy.get('select[name="familia"]').select('ASTRA HATCH');
    cy.get('input[name="molicar"]').type('12345');
    cy.get('input[name="modelo"]').type('ASTRA');
    cy.get('select[name="combustivel"]').select('Gasolina');
    cy.get('input[name="portas"]').type('4');
    cy.get('input[name="anoInicio"]').type('2000');
    cy.get('input[name="anoFim"]').type('2025');
    cy.get('input[name="cilindradas"]').type('1400');
    cy.get('input[name="cavalos"]').type('110');

    // Salvar
    cy.contains('button', 'Salvar').click();

    // Verificar mensagem de sucesso
    cy.contains('Modelo Cadastrado com Sucesso').should('be.visible');

});

    it('', () => {
        
    });
});


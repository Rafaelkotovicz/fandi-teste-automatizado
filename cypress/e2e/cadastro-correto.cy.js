const { it } = require("mocha");

describe('Página de cadastro e gerenciamento', () => {
    //sempre é executado antes do teste caso haja mais de um teste que precise do acesso a essa página
    beforeEach(() => {
        cy.visit('https://provaqa.fandi.com.br/');
        cy.get('button, .btn btn-popup').click();
    });

    it('Cadastro correto de novo modelo', () => {
    // Abrir formulário de cadastro
    cy.contains('#botaoNovoVeiculo').click();

    // Preencher os campos necessários para o cadastro
    cy.get('#novaFamilia').select('ASTRA HATCH');
    cy.get('#novoFabricante').select('CHEVROLET');
    cy.get('input[name="molicar"]').type('12345');
    cy.get('input[name="modelo"]').type('ASTRA');
    cy.get('select[name="combustivel"]').select('Gasolina');
    cy.get('input[name="portas"]').type('4');
    cy.get('input[name="anoInicio"]').type('2000');
    cy.get('input[name="anoFim"]').type('2025');
    cy.get('input[name="cilindradas"]').type('1400');
    cy.get('input[name="cavalos"]').type('110');

    // Salvar
    cy.contains('#btnSalvar').click();

    // Verificar mensagem de sucesso
    cy.contains('Modelo Cadastrado com Sucesso').should('be.visible');

});

    it('Não deve permitir salvar sem preencher os campos obrigatórios', () => {
        // Abrir formulário de cadastro
    cy.contains('#botaoNovoVeiculo').click();

    // Tentar salvar sem preencher nada
    cy.contains('#btnSalvar').click();

    // Validar mensagens de erro nos campos obrigatórios
    cy.get('#novaFamilia').parent().should('contain', 'Campo Obrigatório.');
    cy.get('#novoFabricante').parent().should('contain', 'Campo Obrigatório.');
    cy.get('input[name="modelo"]').parent().should('contain', 'Campo Obrigatório.');
    cy.get('input[name="molicar"]').parent().should('contain', 'Campo Obrigatório.');
    cy.get('select[name="combustivel"]').parent().should('contain', 'Campo Obrigatório.');
    cy.get('input[name="portas"]').parent().should('contain', 'Campo Obrigatório.');
    cy.get('input[name="anoInicio"]').parent().should('contain', 'Campo Obrigatório.');
    cy.get('input[name="anoFim"]').parent().should('contain', 'Campo Obrigatório.');
    cy.get('input[name="cilindradas"]').parent().should('contain', 'Campo Obrigatório.');
    cy.get('input[name="cavalos"]').parent().should('contain', 'Campo Obrigatório.');

    });
});


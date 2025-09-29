const { it } = require("mocha");

describe('Página de cadastro e gerenciamento', () => {
    //sempre é executado antes do teste caso haja mais de um teste que precise do acesso a essa página
    beforeEach(() => {
        cy.visit('https://www.youtube.com/');
        cy.get('button, .btn btn-popup').click();
    });

    context('Quando o usuário preecher o formulário de cadastro corretamente', () => {
        it('um novo modelo deve ser cadastrado', () => {
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
    });

    
    context('Quando o usuário tentar realizar um cadastro sem preencher os campos obrigatórios', () => {
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
    

    context('Quando o usuário preecher o formulário de cadastro e clicar no botão cancelar', () => {
        it('O cadastro não deve ser realizado', () => {
            // Abrir o formulário
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

            // Clicar em Cancelar
            cy.contains('#btnCancelar').click()

            // Verificar que o formulário foi fechado
            cy.get('.modal-content-wrapper').should('not.exist')
        });
    });

    context('Ao acessar a tela principal do sitema', () => {
        it('Deve ser exibida a lista de modelos cadastrados', () => {
            cy.get('#tableModelos').should('be.visible');
        });
    });

    context('Ao acessar a tela principal com a lista de modelos cadastrados', () => {
        it('Ao clicar no botão de editar, o formulário de cadastro deve abrir com as informações já preenchidas do veículo e exibir data e hora da criação e edição', () => {
            //Clica no botão de editar
            cy.contains('.action primary').click();
            // Validar que aparecem as informações de data e hora de criação e alteração
            cy.contains('Inclusão ADM').should('exist');
            cy.contains('Alteração ADM').should('exist');
        });
    });

    context('Ao acessar a tela principal com a lista de modelos cadastrados', () => {
        it('Ao clicar no botão de editar, o formulário de cadastro deve abrir com as informações já preenchidas do veículo e editar o número de portas corretamente', () => {
            //Clica no botão de editar e abre o formulário de cadastro
            cy.contains('.action primary').click();
            //Preencher o número de portas
            cy.get('input[name="portas"]').type('4');
            // Salvar
            cy.contains('#btnSalvar').click();
            //Clica no botão de editar e abre o formulário de cadastro novamente
            cy.contains('.action primary').click();
            // Validar que aparecem as informações de data e hora de criação e alteração
            cy.contains('Inclusão ADM').should('exist');
            cy.contains('Alteração ADM').should('exist');
        });
    });
});


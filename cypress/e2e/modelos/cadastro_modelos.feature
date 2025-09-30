# Funcionalidade: Cadastro de modelos de veículos
# Este arquivo contém a documentação BDD (Gherkin) para a gestão de modelos de veículos.

Funcionalidade: Gestão de Modelos de Veículos

  Contexto:
    Dado que estou na tela de gestão de modelos

  @cadastro
  Cenário: 1 - Cadastro de modelo realizado com sucesso
    Dado que clico no botão "Novo modelo"
    Quando preencho todos os campos obrigatórios corretamente
    E clico no botão "Salvar"
    Então o sistema deve exibir a mensagem "Modelo cadastrado com sucesso"
    E o modelo deve aparecer na lista com seus dados preenchidos

  @cadastro @negativo
  Cenário: 2 - Cadastro inválido por campos obrigatórios vazios
    Dado que clico no botão "Novo modelo"
    Quando não preencho nenhum campo
    E clico no botão "Salvar"
    Então o sistema deve exibir mensagens de erro para cada campo obrigatório
    E o cadastro não deve ser realizado

  @cadastro
  Cenário: 3 - Cancelar cadastro
    Dado que clico no botão "Novo modelo"
    E começo a preencher os campos
    Quando clico no botão "Cancelar"
    Então o formulário deve ser fechado
    E nenhum modelo deve ser adicionado à lista

  @lista
  Cenário: 4 - Exibir lista de modelos cadastrados
    Dado que existem modelos cadastrados
    Quando acesso a tela de modelos
    Então o sistema deve exibir uma lista com os modelos cadastrados
    E cada linha da lista deve conter os dados do modelo
    E deve exibir botões "Editar" e "Excluir"

  @edicao
  Cenário: 5 - Abrir formulário para edição de modelo
    Dado que existe um modelo cadastrado
    Quando clico no botão "Editar" desse modelo
    Então o sistema deve exibir o formulário de cadastro preenchido com os dados do modelo
    E abaixo do formulário deve exibir "Data de criação" e "Data de alteração"

  @edicao
  Cenário: 6 - Edição de modelo realizada com sucesso
    Dado que existe um modelo cadastrado
    E clico no botão "Editar" nesse modelo
    Quando altero o campo "Cavalos" para "150"
    E clico no botão "Salvar"
    Então o sistema deve exibir a mensagem "Modelo atualizado com sucesso"
    E a data de alteração deve ser atualizada para a data e hora atual
    E a lista deve refletir os novos valores

  @edicao @cancelamento
  Cenário: 7 - Cancelar edição de modelo
    Dado que existe um modelo cadastrado
    E clico no botão "Editar" nesse modelo
    Quando altero alguns campos
    E clico no botão "Cancelar"
    Então o formulário deve ser fechado
    E os dados originais do modelo devem permanecer inalterados na lista
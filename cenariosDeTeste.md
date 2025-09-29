Funcionalidade: Cadastro de modelos de veículos

#Cenário 1: Cadastro de modelo realizado com sucesso


**Dado** que clico no botão "Novo modelo"
**Quando** preencho todos os campos obrigatórios corretamente
**E** clico em "Salvar"
**Então** o sistema deve exibir a mensagem "Modelo cadastrado com sucesso"
**E** o modelo deve aparecer na lista com seus dados preenchidos

---------------------------------------------------------

#Cenário 2: Cadastro inválido por campos obrigatórios vazios

**Dado** que clico no botão "Novo modelo"
**Quando** não preencho nenhum campo
**E** clico em "Salvar"
**Então** o sistema deve exibir mensagens de erro paracada campo obrigatório
**E** o cadastro não deve ser realizado

---------------------------------------------------------

#Cenáiro 3: Cancelar cadastro

**Dado** que clico no botão "Novo modelo"
**E** começo a preencher os campos
**Quando** clico no botão "Cancelar"
**Então** o formulário deve ser fechado
**E** nenhum modelo deve ser adicionado à lista

---------------------------------------------------------

#Cenário 4: Exibir lista de modelos cadastrados

**Dado** que existem modelos cadastrados
**Quando** acesso a tela de modelos
**Então** o sistema deve exibir uma lista com os modelos cadastrados
**E** cada linha da lista deve conter os dados do modelo
**E** botões "Editar" e "Excluir"

---------------------------------------------------------

#Cenário 5: Editar formulário de cadastro de modelo

 **Dado** que existe um modelo cadastrado
 **Quando** clico no botão "Editar" desse modelo
 **Então** o sistema deve exibir o formulário de cadastro preenchido com os dados do modelo
 **E** abaixo do formulário deve exibir "Data de criação" e "Data de alteração"

 ---------------------------------------------------------

#Cenário 6: Editar modelo com sucesso

**Dado** que existe um modelo cadastrado
**E** clico em "Editar" nesse modelo
**Quando** altero o campo "Cavalos" para "150"
**E** clico em "Salvar"
**Então** o sistema deve exibir a mensagem "Modelo atualizado com sucesso"
**E** a data de alteração deve ser atualizada para a data e hora atual
**E** a lista deve refletir os novos valores

---------------------------------------------------------

#Cenário 7: Cancelar edição de modelo

**Dado** que existe um modelo cadastrado
**E** clico em "Editar" nesse modelo
**Quando** altero alguns campos
**E** clico em "Cancelar"
**Então** o formulário deve ser fechado
**E** os dados originais do modelo devem permanecer inalterados na lista
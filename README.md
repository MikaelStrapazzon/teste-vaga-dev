# Enterprises CRUD

## Informações (DEV)
  - API Backend: **Porta 8000**
  - Frontend: **Porta <?>**
  - Banco de Dados: **Somente comunicação entre containers**
    - Senha e usuário padrão: **root**
  - PhpMyAdmin: **Porta 8010**

## Como executar o projeto

### Produção
 - Em construção

### Desenvolvimento
#### Requisitos
  - Docker (https://www.docker.com/)
  - Docker-compose (https://docs.docker.com/compose/install/)

Você pode testar as instalações com os seguintes comandos
  ```
  docker -v
  docker-compose -v
  ```
#### Inicializando
  - Na raiz do projeto, rodar o seguinte comando:
  ```
  docker-compose -f ./containers/dev/docker-compose.dev.yml up
  ```
  - Esse comando vai subir:
    - API na porta 8000
    - PhpMyAdmin na porta 8010
    - MySQL para uso da API e PhpMyAdmin
      - Se for a primeira vez subindo o banco de dados, irá também subir a estrutura e dados iniciais que estão presentes no arquivo "init.sql"

## Melhorias futuras
### Backend
  - Adicionar Swagger para documentar a API

### Banco de dados
  - Subir estrutura através de Migrations
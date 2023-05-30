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

## Melhorias futuras
### Backend
  - Adicionar Swagger
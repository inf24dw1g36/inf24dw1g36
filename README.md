# Trabalho Prático - Desenvolvimento Web I (2024/25)

## Descrição do Projeto

Este projeto tem como objetivo o desenvolvimento de uma aplicação web com base em uma arquitetura RESTful, utilizando **Node.js** para a criação da API e **MySQL** como banco de dados. A aplicação será também contentorizada com **Docker** para facilitar a instalação e execução.

### Funcionalidades

- **API REST** com 4 verbos HTTP (CRUD) implementados.
- **4 recursos diferentes** disponibilizados pela API.
- Implementação de **relação de cardinalidade 1:n** entre dois recursos.
- Representação dos recursos em formato **JSON**.
- **Documentação OpenAPI 3.0** da API.
- **Coleção Postman** para testes da API.
- **MySQL** como sistema de gerenciamento de banco de dados.
- **Docker** para contentorização da aplicação (com pelo menos 2 containers).

## Objetivos

- Criar uma **API RESTful** utilizando **Node.js**.
- Integrar a API com um banco de dados **MySQL**.
- Implementar **relações de cardinalidade 1:n** e **m:n** entre os recursos.
- Desenvolver a **documentação da API** no formato **OpenAPI 3.0**.
- Contentorizar a aplicação utilizando **Docker**.
- Criar uma **coleção Postman** para facilitar os testes da API.

## Estrutura do Projeto

### Backend

- **`sql/`**: Contém os scripts SQL para criação da base de dados e inserção de dados iniciais.
- **`src/`**: Contém o código da API.
  - **`controllers/`**: Controladores dos modelos que gerenciam as requisições HTTP.
  - **`datasources/`**: Configuração da conexão com o banco de dados MySQL.
  - **`repositories/`**: Implementações de acesso aos dados.
  - **`models/`**: Modelos de dados e relações entre os recursos.
  - **`docker-compose.yaml`**: Arquivo de configuração do Docker para a criação do ambiente multi-container (Node.js + MySQL).
  - **`openapi.json`**: Documentação da API no formato OpenAPI 3.0.
  - **`postman/`**: Coleção de requisições para testes da API no Postman.
- **`README.md`**: Este arquivo com informações sobre o projeto.

### Frontend (Backoffice)

- **`frontend/backoffice/`**: Aplicação de backoffice baseada no React-Admin.
  - **`src/`**: Código essencial da interface de administração.
    - **`app.js`**: Configuração principal da interface.
    - **`hotels.js`**: Interface para gestão dos hotéis.
    - **`rooms.js`**: Interface para gestão dos quartos.
    - **`guests.js`**: Interface para gestão dos hóspedes.
    - **`reservations.js`**: Interface para gestão das reservas.

## Requisitos

### Backend

- **Node.js** como framework para criação da API RESTful.
- **MySQL** como banco de dados.
- **Docker** para contentorização da aplicação.

### Frontend

- **React-Admin** para o desenvolvimento da interface de backoffice.

### Docker

- **Docker Engine** para criação dos containers.

## Como Rodar o Projeto

### Pré-requisitos

- **Docker** instalado.

### Passo a Passo

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/inf24dw1gXX/inf24dw1gXXm2
   cd inf24dw1gXX/api-hotel-m3/

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

### Endpoints da API

| Recurso      | Método  | Path                                   | Descrição                               |
|--------------|---------|----------------------------------------|-----------------------------------------|
| **Hotels**   | GET     | `/hotel`                               | Obter todos os hotéis.                 |
|              | POST    | `/hotel`                               | Criar um novo hotel.                   |
|              | GET     | `/hotels/{id}`                         | Obter um hotel pelo ID.                |
|              | PUT     | `/hotels/{id}`                         | Atualizar um hotel pelo ID.            |
|              | DELETE  | `/hotels/{id}`                         | Remover um hotel pelo ID.              |
| **Rooms**    | GET     | `/rooms`                               | Obter todos os quartos.                |
|              | POST    | `/rooms`                               | Criar um novo quarto.                  |
|              | GET     | `/rooms/{id}`                          | Obter um quarto pelo ID.               |
|              | PUT     | `/rooms/{id}`                          | Atualizar um quarto pelo ID.           |
|              | DELETE  | `/rooms/{id}`                          | Remover um quarto pelo ID.             |
| **Reservations** | GET | `/reservations`                        | Obter todas as reservas.               |
|              | POST    | `/reservations`                        | Criar uma nova reserva.                |
|              | GET     | `/reservations/{id}`                   | Obter uma reserva pelo ID.             |
|              | PUT     | `/reservations/{id}`                   | Atualizar uma reserva pelo ID.         |
|              | DELETE  | `/reservations/{id}`                   | Remover uma reserva pelo ID.           |
| **Guests**   | GET     | `/guests`                              | Obter todos os hóspedes.               |
|              | POST    | `/guests`                              | Criar um novo hóspede.                 |
|              | GET     | `/guests/{id}`                         | Obter um hóspede pelo ID.              |
|              | PUT     | `/guests/{id}`                         | Atualizar um hóspede pelo ID.          |
|              | DELETE  | `/guests/{id}`                         | Remover um hóspede pelo ID.            |


### Backend

- **`sql/`**: Contém os scripts SQL para criação da base de dados e inserção de dados iniciais.
- **`api/`**: Contém a estrutura yaml da api.
- **`controllers/`**: Controladores dos modelos que gerenciam as requisições HTTP.
- **`service/`**: Gerenciador dos caminhos da api.
- **`utils/db.js`**: Conecção a base dados.
- **`docker-compose.yaml`**: Arquivo de configuração do Docker para a criação do ambiente multi-container (Node.js + MySQL).
- **`My_Api_Hotel.postman_collection.json`**: Coleção de requisições para testes da API no Postman.
- **`README.md`**: Este arquivo com informações sobre o projeto.

## Requisitos

### Backend

- **Node.js** Como framework para criação da API RESTful.
- **MySQL** Como banco de dados.
- **Docker** Para contentorização da aplicação.

### Docker

- **Docker Engine** para criação dos containers.

## Como Rodar o Projeto

### Pré-requisitos

- **Docker** instalado.
- Garantir que nenhum serviço esta a utilizar as portas 8080 e 3306.
- Garantir que o docker engine esteja executando.

### Passo a Passo

   Abra um terminal em um diretorio a sua escolha e digite os seguintes comandos: 

   ```bash
   git clone https://github.com/inf24dw1g36/inf24dw1g36.git
   cd inf24dw1g36/
   docker-compose up -d
   ```
   Espere até os container estarem ativos, quando isso acontecer o serviço sera disponibilizado no url a seguir. 

   Browser: http://localhost:8080/docs

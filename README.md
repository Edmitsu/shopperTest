# Shopper.com API

Esta é uma API REST desenvolvida em Node.js com TypeScript para o projeto Shopper.com. A aplicação utiliza Docker para containerização e PostgreSQL como banco de dados.

## Estrutura do Projeto

- **`src/`**: Contém o código fonte TypeScript.
  - **`controllers/`**: Controladores para gerenciar as rotas e lógica de negócios.
  - **`entity/`**: Entidades do TypeORM que representam as tabelas do banco de dados.
  - **`routes/`**: Definição das rotas da API.
  - **`app.ts`**: Configuração do Express e conexão com o banco de dados.
  - **`ormconfig.json`**: Configurações do TypeORM.

- **`dist/`**: Diretório gerado pela compilação do TypeScript.

- **`Dockerfile`**: Define a imagem Docker para a aplicação.

- **`docker-compose.yml`**: Configura os containers Docker.

- **`package.json`**: Gerencia dependências e scripts do projeto.

- **`tsconfig.json`**: Configurações do compilador TypeScript.

## Pré-requisitos

Antes de iniciar, certifique-se de que você tem os seguintes softwares instalados:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuração e Execução

1. **Clone o Repositório**

   git clone https://github.com/Edmitsu/shopperTest
   cd shopper.com

2. **Configurar o Docker**

    O projeto inclui um Dockerfile e um docker-compose.yml para configurar e rodar os containers Docker. As configurações estão pré-definidas para você, mas certifique-se de ajustar as variáveis de ambiente conforme necessário.

3. **Construir e Subir os Containers**

    Para construir e iniciar os containers Docker, use o comando:
        docker-compose up --build
    
    Isso irá:
    Construir a imagem Docker da aplicação.
    Iniciar o container da aplicação.
    Iniciar o container do banco de dados PostgreSQL.

4. **Verificar a Aplicação**

    Após iniciar os containers, a API estará disponível em http://localhost:3000.

5. **Parar os Containers**

    docker-compose down

## Contribuição
    Se você deseja contribuir para este projeto, por favor, faça um fork do repositório e envie um pull request.
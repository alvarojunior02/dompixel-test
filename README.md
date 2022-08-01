# Desafio da DomPixel
Uma aplicação completa (envolvendo frontend/backend), capaz de inserir, excluir, atualizar e editar cadastros de produtos.

## Backend
Passo a passo para executar o Backend (levando em conta que Node, Docker e Yarn estão presentes no sistema):

- Clone o repositório na sua máquina;
- Abra a pasta "/api" no terminal e rode o comando "yarn", para instalar nas dependencias do projeto;
- Ainda na pasta "/api", rode o comando "yarn start" para iniciar o servidor;

Pronto, a API ja está funcionando. 
Agora, um passo a passo extra para o banco de dados (PostgreSQL):

- Abra o terminal na pasta "/api/Docker/database" (note que tem um arquivo docker-compose.yml);
- Certifique-se de que ja não exista alguma imagem "postgres:postgres:14.4-alpine" baixada no seu Docker;
- Na pasta mencionada anteriormente, rode o comando: "docker-compose up", para criar o container do banco de dados;

Pronto, a parte do banco de dados e API está completa. Vamos para o frontend agora.

## Frontend

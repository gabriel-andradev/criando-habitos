# NLW Setup Trilha Ignite - criando-habitos
Software para gerenciar e melhorar hábitos diários

## ✔️ Linguagens e tecnologias utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org)
- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io)
- [SQLite](https://www.sqlite.org/index.html)
- [MermaidJS](https://mermaid.js.org/)
- [Radix UI](https://www.sqlite.org/index.html)

## Design da aplicação WEB
<p align="center">
  <img src="https://user-images.githubusercontent.com/101130704/221383910-e97ba548-d5c8-4b80-a96c-7103347f7c57.png"/>
  <img src="https://user-images.githubusercontent.com/101130704/221383942-10ca1916-d38a-4de2-9d88-00c8c90ace8b.png"/>
</p>

## 🕹️ Como Utilizar
Para rodar esta aplicação, você precisará de uma IDE ou editor de código-fonte capaz de executar o NPM. A aplicação "server" integra com a "web", fornecendo o back-end. Para executar a aplicação, siga os seguintes passos:

Execute o back-end da aplicação para que possamos executar o front-end completamente.
#### Server
Execute os seguintes comandos com o [npm](https://www.npmjs.com) para instalar as dependências e o banco de dados local:
```
$ npm install
$ npx prisma migrate dev
```
Em seguida, execute o comando abaixo para iniciar o servidor:
```
$ npm run dev
```
#### Web
Para executar a aplicação web, primeiro inicie o servidor e, em seguida, execute a aplicação "web".
```
$ npm install
$ npm run dev
```
## Informações Extras:

### HTTP methods 
- GET = Buscar
- POST = Criar
- PUT = Editar uma entidade
- PATCH = Editar uma informação específica
- DELETE = Deletar/Apagar

Obs.: O nome das rotas sempre está no plural.

### HTTP Codes

Os códigos HTTP indicam o tipo de resposta do back-end.

Status 200 - Resposta genérica de sucesso (OK)
Status 201 - Algo foi criado (CREATED)

Principais:

- Começa com 200 -> Sucesso
- Começa com 300 -> Redirecionamento
- Começa com 400 -> Erro no código ou por parte do cliente
- Começa com 500 ou derivados -> Erro interno e/ou erro inesperado

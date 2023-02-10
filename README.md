# NLW Setup Trilha Ignite - criando-habitos
Software para gerenciar e melhorar seus hábitos diários

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
  <img src="https://user-images.githubusercontent.com/###.png"/>
  <img src="https://user-images.githubusercontent.com/###.png"/>
</p>

## 🕹️ Como Utilizar
Para rodar esta aplicação será necessário uma IDE ou editor de código-fonte capaz de rodar o NPM

A aplicação "server" integra com a "web", realizando o Back-end. Caso queira rodar a aplicação basta utilizar os seguintes comandos:

Primeiro vamos rodar a aplicação do Back-end, para que possamos rodar a aplicação do Front-end com completamente.
#### Server
Rodamos os comandos com o [npm](https://www.npmjs.com) para instalar as dependências e o banco de dados local.
```
$ npm install
$ npx prisma migrate dev
```
Depois rodamos o comando para iniciar o servidor
```
$ npm run dev
```
#### Web
Rodando a aplicação web, primeiro iniciar o servidor e depois a "web"
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

Obs.: o nome das rotas são sempre no plural.

### HTTP Codes

Tipo de resposta que do Back-end.

Status 200 - Resposta genérica de sucesso (OK)

Status 201 - _Algo_ foi criado (CREATED)

Principais: 

- Começa com 200 -> Sucesso
- Começa com 300 -> Redirecionamento
- Começa com 400 -> Erro no código ou por parte do cliente
- Começa com 500 ou derivados -> Erro interno e/ou erro inesperado

# NLW Setup - Trilha Ignite: criando-habitos
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
  <img src="https://user-images.githubusercontent.com/101130704/221712389-13e8a958-9ee2-4367-af13-0e8789e6a270.png"/>
  <img src="https://user-images.githubusercontent.com/101130704/221712653-2fa7ed75-3683-431f-ad7b-ce0797782073.png"/>
  <img src="https://user-images.githubusercontent.com/101130704/221712892-0100d1c4-ed8a-410f-bdf9-38bae9b6f6aa.png" height="265em" />
  <img src="https://user-images.githubusercontent.com/101130704/221712968-b208220c-a5c8-460a-97db-e8431809f6b4.png" height="265em" />
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

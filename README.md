<h1 align="center">API de emails do projeto MGC</h1>

<p align="center">
    <img alt="Badge indicando que o projeto foi criado em fevereiro de 2023" src="https://img.shields.io/badge/Data%20de%20cria%C3%A7%C3%A3o-fevereiro%2F2023-blue">
    <img alt="Badge indicando que o status do projeto é 'concluído'" src="https://img.shields.io/badge/Status-Concluído-yellow">
</p>

<p align="center">
    • <a href="#descricao">Descrição</a>
    • <a href="#funcionalidades">Funcionalidades</a>
    • <a href="#endpoints">Endpoints</a>
    • <a href="#dependencias">Dependências</a>
    • <a href="#tecnologias">Tecnologias</a>
    • <a href="#Desenvolvedora">Desenvolvedora</a>
</p>

<h2 id="descricao">:pencil2: Descrição</h2>
API REST feita com Express e typescript, 
desenvolvida com o intuito de intermediar o envio de e-mails feito através do site do projeto MGC (Minhas Grandes Crianças), uma ONG que promove atividades
socioeducativas para crianças e jovens.

<h2 id="funcionalidades">:hammer: Funcionalidades</h2>

- Recebe os dados do email por meio de uma requisição.
- Formata o email.
- Envia o email para o destinatário indicado na requisição através do Nodemailer.

<h2 id="endpoints">:checkered_flag: Endpoints</h2>

| Método | Endpoint | Responsabilidade |
|--------|----------|------------------|
| POST | /email | Envia os dados do email a ser submetido |

### Corpo

```json
{
  "to": "email@gmail.com",
  "sender": "email@gmail.com",
  "data": "06/02/2023",
  "telefone": "(99) 99999-9999",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
}
```
### Retorno de sucesso 
**Status: 200 (Sucesso)**
```json
{
  "message": "Email enviado com sucesso"
}
```
### Retornos de erro
**Status: 400 (Falha no corpo da requisição)**
<br />
<br />
Algum dos dados no corpo da requisição tem um tipo diferente de string:

```json
{
  "message": "Todas as propriedades devem ser do tipo string"
}
```
Uma propriedade diferente das definidas no caso de sucesso é inserida no corpo da requisição:

```json
{
  "message": "As chaves necessárias no corpo da requisição são: to, sender, data, telefone, text"
}
```

<h2 id="dependencias">:wave: Dependências </h2>

### Instalando o nodeJS
Para executar o projeto localmente, é necessário ter o nodeJS instalado. 
É possível instalá-lo por meio <a href="https://nodejs.org/en/download/" target="_blank">desse link</a>.
  
### Como instalar as bibliotecas?
Após a instalação do nodeJS, basta abrir a pasta do repositório clonado e inserir os seguintes códigos no terminal:
<br>
`yarn install`

### Como executar a API?
O código a seguir deve ser digitado no terminal, após isso é possível mandar requisições para a rota `/email`:
<br>
`tsnd --cls --rs src/app.ts`

<h2 id="tecnologias">:computer: Tecnologias</h2>

- <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://nodejs.org/en/about/">NodeJS</a>

<h2 id="Desenvolvedora">:woman: Desenvolvedora</h2>

<p align="center">
  <a href="https://github.com/Danielle-Luz">
    <img width="120px" src="https://avatars.githubusercontent.com/u/99164019?v=4" alt="foto de uma mulher parda com o cabelo castanho, sorrindo levemente na frente de um fundo verde com bits">
  </a>
</p>

<p align="center">
Danielle da Luz Nascimento
</p>

<p align="center">
<a href="https://www.linkedin.com/in/danielle-da-luz-nascimento/">@Linkedin</a>
</p>

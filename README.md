![banner](https://user-images.githubusercontent.com/61299540/123202984-020f5000-d48c-11eb-8c12-38af40aae04e.png)

# NLW Valoriza (Next Level Week - 6ª edição) 🚀

[![nodejs-badge][nodejs-img]][nodejs]

[nodejs-img]: https://img.shields.io/badge/Node.js-v14.17-green
[nodejs]: https://nodejs.org/en/

---

## Descrição 📌 <a name="description"></a>

Sistema para fazer elogio a outros usuários por meio de tags.

---

## Execução ✅ <a name="execution"></a>

```bash

# Clone este repositório
$ git clone https://github.com/liviabelirocha/nlw-valoriza

# Instale as dependências
$ yarn

# Executar aplicação
$ yarn dev
```

## Rotas atuais do projeto ➡️ <a name="routes"></a>

- **POST**
  - `/tags` -> Criar nova tag
  - `/users` -> Criar novo usuário
  - `/login` -> Auntenticar usuário
  - `/compliments` -> Cadastrar elogio (administrador)
- **GET**
  - `/tags` -> Listas as tags cadastradas
  - `/users` -> Listar todos os usuários cadastrados
  - `/users/compliments/send` -> Listar elogios enviados
  - `/users/compliments/receive` -> Listar elogios recebidos

## Regras do projeto <a name="rules"></a>

- **Cadastro de usuário**

- [x] Não é permitido cadastrar mais de um usuário com o mesmo em-mail

- [x] Não é permitido cadastrar usuário sem e-mail

- **Cadastro de TAG**

- [x] Não é permitido cadastrar tag sem nome

- [x] Não é permitido cadastrar mais de uma tag com o mesmo nome

- [x] Não é permitido o cadastro por usuários que não sejam administradores

- **Cadastro de elogios**

- [x] Não é permitido um usuário cadastrar um elogio para si

- [x] Não é permitido cadastrar elogios para usuários inválidos

- [x] O usuário precisar estar autenticado na aplicação

### Comandos de migration:

- _yarn typeorm migration:create -n NameEntity_ -> cria um arquivo de uma entidade
- _yarn typeorm migration:run_-> cadastra a migration com os dados SQL digitados
- _yarn typeorm migration:revert_-> remove a última migration cadastrada

---

Licença MIT ©

# Visualizador de Perfil do GitHub

## Descrição

Este é um projeto simples que permite visualizar o perfil de um usuário do GitHub, incluindo seus repositórios mais recentes.

## Como usar

1.  Abra o arquivo `index.html` em seu navegador.
2.  Digite o nome de um usuário do GitHub na caixa de pesquisa.
3.  Clique no botão "Buscar".

## Endpoints da API do GitHub

*   **Perfil:** `GET /users/:username`
*   **Repositórios:** `GET /users/:username/repos?per_page=10&sort=created`

# Espresso Challenge

Este projeto é uma aplicação React + Vite que consome dados de uma API, exibe extratos financeiros em tabelas paginadas, e permite filtrar por mês e tipo de produto. O projeto utiliza Material UI para estilização e React Query para gerenciamento de dados assíncronos.

---

## **Requisitos**

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js (versão 20.19+ ou superior)

npm ou yarn

---

## **Tecnologias Utilizadas**

React

TypeScript

Vite

Material UI

React Query

Axios

ESLint


## **Instalação e Configuração**

npm install ou yarn

Crie um arquivo .env na raiz do projeto e configure a URL base da API: 

- VITE_API_URL=<URL_DA_API>

Após estes passos executar o script dev(npm run dev ou yarn dev)

## Estrutura do Projeto (Atomic Design)

Atoms: Componentes básicos como botões, badges e similares.

Molecules: Combinações de atoms, como cards de resumo, filtros de mês ou valores de transação.

Organisms: Componentes complexos como tabelas de extrato.

Contexts: Providers e hooks para gerenciamento global de estado e filtros.

## Funcionalidades
Consulta e exibição de extratos financeiros via API.

Filtros por tipo de produto e mês.

Tabela paginada com personalização de linhas por página.

## Aplicação
https://espresso-challenge.netlify.app/

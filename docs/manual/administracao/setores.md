---
sidebar_position: 3
title: Setores
---

# Setores

Setores são as áreas da Fatec que atendem os chamados (ex.: Secretaria, Suporte Técnico). Os chamados podem ser filtrados por setor, e os relatórios mostram o atendimento de cada um.

![Setores](/img/manual/admin-06-setores.webp)

## Criar e organizar

- **Novo setor**: cria um setor.
- **Renomear** e **Remover**: aparecem com o setor selecionado.
- **Buscar setor**: filtra a lista à esquerda.

## Equipe do setor

Com o setor selecionado:

1. Clique em **Atribuir funcionários** e escolha as pessoas.
2. Defina o **papel no setor** de cada uma (ex.: secretaria, técnico, gestor).

A tabela mostra quem faz parte do setor, com e-mail e papel. Os membros do setor recebem as notificações dos chamados do setor.

## Como o chamado chega ao setor

Cada serviço do catálogo tem um **setor provável** (ex.: "Secretaria Acadêmica", "Coordenação de Curso"), que o aluno vê na primeira etapa do pedido. Na abertura, o sistema procura um setor cujo **nome contenha** esse texto e associa o chamado a ele.

- Se nenhum setor tiver nome correspondente, o chamado fica **sem setor**, e ninguém da equipe é notificado.
- Por isso, **dê aos setores os mesmos nomes usados no catálogo** (Secretaria Acadêmica, Coordenação de Curso, Setor de Estágio, Biblioteca…).

Uma associação mais segura, por serviço, está [planejada](https://github.com/4dsm2026/backend_fatecProjeto/issues/114).

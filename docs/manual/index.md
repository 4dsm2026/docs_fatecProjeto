---
sidebar_position: 1
slug: /manual
title: Visão geral
---

# Manual do usuário

O **WorkFlow FATEC** é o portal de atendimento acadêmico da Fatec. Pelo sistema, o aluno abre solicitações (declarações, matrícula, acesso a sistemas e outras), acompanha o andamento e conversa com a secretaria, sem precisar ir pessoalmente ao balcão. A equipe da Fatec recebe, distribui e responde essas solicitações em um único painel.

## Quem usa e onde encontrar ajuda

| Perfil | O que faz no sistema | Comece por |
|---|---|---|
| **Aluno** | Abre e acompanha solicitações, envia sugestões, mantém os dados de contato | [Aluno](./aluno/visao-geral.md) |
| **Secretaria** (Backoffice) e **equipe técnica** | Atende as solicitações, conversa com o aluno, muda status e prioridade, responde sugestões, acompanha relatórios | [Secretaria e equipe técnica](./equipe/visao-geral.md) |
| **Administrador** | Tudo o que a equipe faz, mais o cadastro de alunos, funcionários, setores e modelos de e-mail | [Administração](./administracao/alunos.md) |

Antes de tudo, veja [Primeiros passos](./primeiros-passos.md): como entrar, o primeiro acesso e o que fazer se esquecer a senha.

## Vocabulário

- **Solicitação** (para o aluno) e **chamado** (para a equipe) são a mesma coisa: um pedido aberto pelo aluno.
- **Protocolo**: o número de cada solicitação, no formato `TCK-XXXXXX`. Use-o para falar sobre a solicitação com a secretaria.
- **Setor**: a área da Fatec responsável pelo atendimento (ex.: Secretaria Acadêmica, Suporte Técnico).

## Status de uma solicitação

O mesmo status aparece com nomes diferentes em cada lugar do sistema:

| Campo **Status** (equipe) | Selo nas listas e nas páginas | Filtro do aluno | Significado |
|---|---|---|---|
| Aberto | Solicitação recebida pela Fatec. | Recebida pela Fatec | Recebida, ainda não iniciada |
| Em atendimento | Em análise pelo setor responsável. | Em análise | Alguém da equipe está cuidando |
| Aguardando usuário | Aguardando documento ou resposta do aluno. | Aguardando minha ação | A equipe precisa de algo do aluno |
| Resolvido | Solicitação respondida. | Respondida | O atendimento foi concluído |
| Encerrado | Atendimento finalizado. | Encerrada | A solicitação foi finalizada |

A padronização desses nomes está [em discussão](https://github.com/4dsm2026/backend_fatecProjeto/issues/119).

:::tip Capturas de tela
As imagens deste manual usam os **dados de teste** do sistema (por exemplo, o aluno "João Silva - Aluno DSM"). Nenhum dado real de aluno ou servidor aparece aqui.
:::

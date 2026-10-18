---
sidebar_position: 5
title: Documentação dos Diagramas C4
sidebar_label: Documentação dos Diagramas C4
---

# Documentação dos Diagramas C4 — Sistema WorkFlow FATEC

Este documento explica os 4 diagramas C4, descrevendo os elementos representados e os processos do sistema em cada nível de zoom, conforme o Modelo C4 (Simon Brown). Os diagramas foram conferidos com o código de `develop` em outubro de 2026.

| Nível | Diagrama | Pergunta que responde |
|-------|----------|----------------------|
| 1 | [Contexto do Sistema](./01_Contexto.mdx) | Quem usa o sistema e com que outros sistemas ele se comunica? |
| 2 | [Container](./02_Containers.mdx) | Quais são as grandes peças executáveis/implantáveis do sistema? |
| 3 | [Componente](./03_Componentes.mdx) | Como a API é organizada internamente? |
| 4 | [Dinâmico](./04_Dinamico.mdx) | Como essas peças colaboram para abrir um chamado? |

---

## 1. Diagrama de Contexto do Sistema

**Objetivo:** o sistema como uma caixa única, cercado pelas pessoas que o usam e pelos sistemas externos com que ele troca informação.

### Elementos

- **Aluno**: abre solicitações pelo catálogo, acompanha o andamento, conversa com a equipe e envia sugestões.
- **Secretaria (Backoffice)**: atende e organiza os chamados, responde sugestões, acompanha relatórios.
- **Equipe técnica**: atende os chamados técnicos do seu setor.
- **Administrador**: tudo o que a equipe faz, mais os cadastros (alunos, funcionários, setores) e os modelos de e-mail.
- **Sistema WorkFlow FATEC**: o portal de atendimento.
- **Provedor de e-mail** (externo): Resend (padrão) ou AWS SES, escolhido por `MAIL_DRIVER`.

### Processos representados

- **Aluno → Sistema:** abre a solicitação (serviço, dados, anexos) e acompanha até a conclusão.
- **Equipe → Sistema:** atende os chamados do seu setor, conversa com o aluno, muda status e prioridade.
- **Administrador → Sistema:** mantém os cadastros e as configurações.
- **Sistema → Provedor de e-mail:** hoje, envia só os links de **primeiro acesso** e de **redefinição de senha**. Os avisos de chamado chegam apenas pelas notificações do sistema ([backend#116](https://github.com/4dsm2026/backend_fatecProjeto/issues/116)).

---

## 2. Diagrama de Container

**Objetivo:** abrir a caixa do sistema e mostrar suas unidades executáveis.

### Dentro do sistema

- **Aplicação Web** (Next.js 15, React 19): Portal do Aluno e painel da Secretaria. O `middleware.ts` confere o JWT no servidor e leva cada perfil para a sua área (`/aluno` ou `/admin`).
- **API** (Node.js 20, Fastify 5, TypeScript): toda a lógica de negócio, exposta como REST/JSON, mais um canal **WebSocket** (`/ws`) para eventos em tempo real (novas mensagens e notificações).
- **Banco de Dados** (MySQL 8, via Prisma): usuários, setores, chamados, histórico de status, mensagens, metadados dos anexos, sugestões, notificações e auditoria.
- **Arquivos de anexos**: o conteúdo dos arquivos fica no disco do servidor. O driver S3 previsto na configuração ainda não existe ([backend#121](https://github.com/4dsm2026/backend_fatecProjeto/issues/121)).
- **Adminer** (só em desenvolvimento): interface web para inspecionar o banco local.

### Fora do sistema

- **Provedor de e-mail** (Resend ou SES).
- **GitHub Actions**: CI (testes, lint, build), releases automáticas e o deploy do backend na AWS ECS Fargate, disparado manualmente.

### Processo representado

1. Aluno e equipe usam a Aplicação Web por HTTPS.
2. A Aplicação Web chama a API (HTTPS/JSON) e mantém um WebSocket aberto para receber eventos.
3. A API lê e grava no MySQL pelo Prisma e grava os anexos no disco.
4. A API aciona o provedor de e-mail para os links de acesso e senha.

---

## 3. Diagrama de Componentes

**Objetivo:** abrir a API e mostrar seus módulos. Cada componente é uma pasta em `src/core/` (rotas → controller → service) ou um plugin/biblioteca.

### Componentes

- **Autorização** (`plugins/auth-verify`): confere o JWT e o perfil nas rotas protegidas.
- **Auth** (`core/auth`): login por e-mail ou RA, refresh, logout, primeiro acesso, redefinição de senha (revoga as sessões abertas) e bloqueio após tentativas erradas.
- **Chamados** (`core/tickets`): cria o chamado (protocolo `TCK-XXXXXX`, setor encontrado pelo nome do "setor provável"), muda status, prioridade, nível e responsável, grava o histórico de status e calcula as estatísticas (`/tickets/stats`).
- **Mensagens** (`core/ticket-messages`): a conversa do chamado.
- **Anexos** (`core/anexos`): upload, lista e download dos arquivos de cada chamado.
- **Catálogo** (`core/catalogo`): categorias e serviços (rota pública).
- **Sugestões** (`core/sugestoes`): caixa de sugestões; a resposta da equipe fica fixa depois de salva.
- **Notificações** (`core/notifications` + `/ws`): notificações in-app, respeitando a preferência de cada usuário, e eventos em tempo real só para os participantes do chamado.
- **Cadastros** (`core/users`, `setores`, `papeis`, `usuario-setor`): alunos, funcionários, setores e o papel de cada pessoa no setor.
- **Comunicações** (`core/comunicacoes`): modelos de e-mail editáveis. Hoje só o envio de teste os usa.
- **Auditoria** (`core/auditoria`, `lib/auditoria`): registro de eventos de autenticação.
- **Mail Adapter** (`config/mail`): driver Resend ou SES.
- **Limpeza de anexos** (`jobs/cleanupAnexos`): tarefa periódica que remove arquivos de anexos excluídos.
- **Acesso a dados** (Prisma Client): a única porta para o banco.

### Processos representados

- Toda rota protegida passa pela **Autorização** antes de chegar ao módulo.
- **Chamados**, **Mensagens** e **Anexos** acionam **Notificações** a cada criação, mudança de status, mensagem ou anexo. Os avisos vão para o solicitante, o responsável e os membros do setor do chamado.
- **Auth** usa o **Mail Adapter** para os links de primeiro acesso e de senha, e registra os logins na **Auditoria**.

### Diferenças em relação à primeira versão

| Primeira versão dizia | Situação atual |
|---|---|
| Backend em Express | Fastify 5 |
| E-mail via AWS SES | Resend por padrão; SES opcional |
| Chamados "valida categoria/serviço" | Não valida ([backend#120](https://github.com/4dsm2026/backend_fatecProjeto/issues/120)) |
| Chamados "controla transições de status" | Sem regras de transição ([backend#119](https://github.com/4dsm2026/backend_fatecProjeto/issues/119)) |
| Status `RESOLVIDO_ENCERRADO` | Dois status: Resolvido e Encerrado |

---

## 4. Diagrama Dinâmico — Abertura de Chamado

**Objetivo:** mostrar a colaboração entre os componentes ao longo do tempo, para a abertura de um chamado.

### Sequência

1. O aluno preenche o assistente (serviço, dados acadêmicos, campos específicos, documentos) e confirma na revisão.
2. A Aplicação Web envia `POST /tickets` com o JWT.
3. Com token inválido, a API responde 401 e a Aplicação Web tenta renovar a sessão; se não conseguir, volta ao login.
4. Com token válido, **Chamados** gera o protocolo e procura um setor cujo nome contenha o "setor provável" do serviço. Se não encontrar, o chamado fica sem setor ([backend#114](https://github.com/4dsm2026/backend_fatecProjeto/issues/114)).
5. **Chamados** grava o chamado com status **ABERTO** e o primeiro registro do histórico.
6. **Notificações** grava os avisos para o solicitante, o responsável e os membros do setor.
7. A API responde **201** com o chamado.
8. Para cada documento escolhido, a Aplicação Web envia `POST /tickets/:id/anexos`, e **Anexos** grava o arquivo e avisa os envolvidos.
9. A Aplicação Web abre a página da solicitação.
10. A equipe do setor vê o chamado em **Todos os Chamados** e começa o atendimento.

Os passos 1–2 correspondem à raia do aluno no [BPMN](/Diagrama_bpmn), os passos 3–9 à raia do sistema, e o passo 10 à raia da equipe.

---

## Como os diagramas se conectam

- O **Contexto** diz quem participa.
- O **Container** diz em que pedaço de software cada interação acontece.
- O **Componente** diz qual módulo da API trata cada responsabilidade.
- O **Dinâmico** amarra tudo em um processo de ponta a ponta, ligando o fluxo de negócio (BPMN) à arquitetura técnica.

## Arquivos-fonte

Os diagramas destas páginas são escritos em **Mermaid**, dentro dos próprios arquivos `.mdx`: é por eles que se atualiza a arquitetura, e a mudança aparece no PR como texto.

Versões originais (setembro de 2026), mantidas como referência histórica:

- [C4_WorkFlow_FATEC.drawio](/diagramas/C4_WorkFlow_FATEC.drawio) (abra em [diagrams.net](https://app.diagrams.net/));
- [Explicando o Diagrama C4 (PDF)](/diagramas/explicando-o-diagrama-c4.pdf).

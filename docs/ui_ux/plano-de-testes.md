---
sidebar_position: 0
title: Plano de testes do sistema
---

# Plano de testes do sistema

Este plano vale para o WorkFlow FATEC inteiro. Ele diz **o que** testar, **como**, **com quais dados** e **quando uma versão pode ir para `main`**. Cada funcionalidade nova ganha também um plano próprio, como o da [Caixa de Sugestões](./plano-de-testes-caixa-sugestoes.md).

## 1. Níveis de teste

| Nível | O que cobre | Ferramenta | Onde fica | Quem roda |
|---|---|---|---|---|
| **Unitário e de API (backend)** | Regras de negócio, validações, permissões por perfil, rotas | Vitest + `app.inject` (Prisma simulado) | `backend_fatecProjeto/tests/` | CI, em todo PR |
| **Unitário (frontend)** | Componentes e funções (`apiFetch`, catálogo, paginação) | Vitest + Testing Library | `frontend_fatecProjeto/tests/` | CI, em todo PR |
| **Ponta a ponta** | Fluxos reais no navegador (login, proteção de rotas…) | Selenium + pytest | [`test_fatecProjeto`](https://github.com/4dsm2026/test_fatecProjeto) | QA, antes de cada versão ([rodar no CI](https://github.com/4dsm2026/test_fatecProjeto/issues/3)) |
| **Manual exploratório e de UX** | Uso real das telas, mensagens, acessibilidade, celular | Roteiros com evidência em vídeo | Planos por funcionalidade (nesta seção) | QA e UX |

Regra prática: o que pode ser automatizado vira teste no CI; o teste manual fica para o que depende de olhar a tela.

## 2. Ambiente e dados

- **Ambiente:** local, seguindo o README do [backend](https://github.com/4dsm2026/backend_fatecProjeto#como-rodar-localmente) e do [frontend](https://github.com/4dsm2026/frontend_fatecProjeto#como-rodar-localmente), a partir da branch `develop` (ou da branch do PR em teste).
- **Dados:** os usuários do `pnpm prisma:seed`. Para repetir o primeiro acesso, rode o seed de novo em um banco limpo (`docker compose down -v` e suba de novo).

| Perfil | Login | Senha inicial |
|---|---|---|
| Administrador | `admin@example.com` | `wf-fatec2026` |
| Secretaria (Backoffice) | `ana.costa@fatec.sp.gov.br` | `Fatec@2026` (troca no 1º acesso) |
| Aluno 1 / 2 / 3 | RA `123456789` / `987654321` / `998877665` | `Fatec@2026` (troca no 1º acesso) |

- **Nunca use dados reais** de alunos ou servidores em testes, prints ou vídeos.

## 3. Suíte de regressão

Rodar **antes de todo PR `develop → main`** e depois de mudanças grandes. Leva cerca de 15 minutos à mão. Cada caso que for automatizado no `test_fatecProjeto` deve ser marcado na coluna **Automação**.

| ID | Cenário | Resultado esperado | Automação |
|---|---|---|---|
| CT-REG-01 | Login com senha errada | Mensagem de erro; continua em `/login` | `test_login_with_wrong_password_shows_inline_error` |
| CT-REG-02 | Login do administrador | Abre `/admin/home` | `test_admin_login_direct_access` |
| CT-REG-03 | Primeiro acesso do aluno | Pede troca de senha; depois abre `/aluno/home` | `test_first_access_users_are_redirected_to_password_change` (parcial: não conclui a troca) |
| CT-REG-04 | Bloqueio por tentativas | 5 senhas erradas seguidas bloqueiam a conta por 15 min | Backend (`tests/produtos/01-auth.test.ts`) |
| CT-REG-05 | Proteção de rotas | Sem login → `/login`; aluno em `/admin` → `/aluno/home`; equipe em `/aluno` → `/admin/home` | `test_route_protection.py` |
| CT-REG-06 | Abrir solicitação pelo catálogo, com anexo | Protocolo `TCK-XXXXXX`, página da solicitação com o anexo | — |
| CT-REG-07 | Chamado na lista da equipe | Aparece em **Todos os Chamados** com status Aberto | — |
| CT-REG-08 | Equipe responde e muda o status | Mensagem na conversa; status salvo; histórico registra a mudança | — |
| CT-REG-09 | Aluno vê resposta e status | Mensagem da equipe e selo "Aguardando documento ou resposta do aluno." | — |
| CT-REG-10 | Notificações | Aluno recebe aviso da mensagem e da mudança de status (sino e página Notificações) | — |
| CT-REG-11 | Caixa de Sugestões | Aluno envia; equipe responde; aluno vê "Respondido" e a resposta | Backend (`10-sugestoes.test.ts`) |
| CT-REG-12 | Isolamento entre alunos | Aluno 2 não abre a solicitação, os anexos nem a sugestão do aluno 1 (404) | Backend para chamados e anexos (`05-autorizacao.test.ts`); sugestões: — |
| CT-REG-13 | Celular | Portal do aluno usável em 390 px de largura, com o botão **Menu** | — |

## 4. Testes de segurança

Rodar a cada versão. Os marcados com "Backend" já estão nos testes automáticos e só precisam continuar passando no CI.

| ID | Cenário | Resultado esperado | Automação |
|---|---|---|---|
| CT-SEG-01 | Acessar API sem token | `401` em todas as rotas, exceto login, primeiro acesso, senha, `GET /catalogo` e `/health` | Backend (`01-auth.test.ts`, parcial) |
| CT-SEG-02 | Aluno acessa chamado, mensagens ou anexos de outro aluno pela API | `404`, sem revelar que o recurso existe | Backend (`05-autorizacao.test.ts`) |
| CT-SEG-03 | Aluno tenta mudar campos da equipe (status, prioridade, nível, setor, responsável), **inclusive no próprio chamado**, ou chama rotas `/admin/*` | `403`, e nada muda | — |
| CT-SEG-04 | Eventos em tempo real | Um aluno conectado **não recebe** mensagens de chamados de outros alunos | Backend (após a correção do advisory) |
| CT-SEG-05 | Link `javascript:` ou imagem fora de PNG/JPEG/WEBP/GIF na sugestão | Rejeitado com `400` | Backend (`sugestao-documento.test.ts`) |
| CT-SEG-06 | Upload acima de 10 MB | Rejeitado | — |
| CT-SEG-07 | Redefinir a senha | Sessões abertas antes da troca deixam de funcionar | Backend (`09-reset-revoga-sessoes.test.ts`) |
| CT-SEG-08 | Commit de `.env` ou arquivo > 5 MB | O hook `pre-commit` bloqueia | Hooks |

Falha em qualquer caso de segurança é **defeito Crítico**. Se for uma vulnerabilidade explorável, não abra issue pública: siga a [política de segurança](https://github.com/4dsm2026/.github/blob/main/SECURITY.md).

## 5. Critérios para liberar uma versão (`develop → main`)

**Entrada** (para começar a testar a versão):
- CI verde em `develop` (backend e frontend);
- funcionalidades da sprint mescladas e com plano de testes próprio quando forem novas.

**Saída** (para mesclar em `main` e gerar a release):
- [ ] Suíte de regressão (seção 3) executada, sem falhas;
- [ ] Testes de segurança (seção 4) sem falhas;
- [ ] Planos das funcionalidades novas executados e aprovados;
- [ ] Nenhum defeito **Crítico** ou **Alto** aberto para a versão;
- [ ] Resultado registrado no PR `develop → main` (quem testou, quando, link das evidências).

## 6. Defeitos

- Todo defeito vira uma **issue** pelo modelo **Bug** no repositório certo, com o ID do caso (ex.: "CT-REG-08") no texto.
- Severidade = label de prioridade: **Crítico** (`priority:critical`: perda de dados, falha de segurança, sistema parado); **Alto** (`priority:high`: funcionalidade principal não funciona); **Médio** (`priority:medium`: funciona com contorno); **Baixo** (`priority:low`: visual ou texto).
- **Evidências** (prints, vídeos): anexe na issue ou no PR. Não faça commit de vídeos no repositório.

## 7. Papéis

| Quem | Faz |
|---|---|
| **QA** | Mantém este plano e os planos por funcionalidade; executa regressão e segurança antes de cada versão; abre os defeitos |
| **UX** | Executa os roteiros de tela e grava as evidências |
| **Desenvolvedores** | Escrevem os testes unitários e de API junto com o código; corrigem os defeitos |
| **Docs/DevOps** | Mantém o CI e o ambiente; publica a release depois da aprovação |

## 8. Última execução

| Data | Versão | Resultado | Observações |
|---|---|---|---|
| 20/10/2026 | `develop` (após os PRs de CI, hooks e README) | No navegador: CT-REG-01, 02, 03, 05 (aluno em `/admin`), 06–10 e 11 (envio do aluno) ✅ · CT-REG-04 e 12 cobertos pelo backend ✅ · CT-REG-13 e seção 4 não executados · Backend 390/390 ✅ · Frontend 18/22 ⚠️ | 4 testes do ConfirmDialog falham ([frontend#236](https://github.com/4dsm2026/frontend_fatecProjeto/issues/236)). Defeitos conhecidos abertos: [#245](https://github.com/4dsm2026/frontend_fatecProjeto/issues/245), [#248](https://github.com/4dsm2026/frontend_fatecProjeto/issues/248), [backend#121](https://github.com/4dsm2026/backend_fatecProjeto/issues/121) |

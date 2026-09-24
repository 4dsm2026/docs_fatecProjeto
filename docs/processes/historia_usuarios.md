---
sidebar_position: 1
title: Histórias de Usuário
---
# 📄 Histórias de Usuário
---

## 1. 🎓 Atendimento Personalizado (Aluno ↔ Coordenador)

### 🐛 Issue 1 — Solicitação de atendimento personalizado

**Prioridade:** 🔴 Alta

| ID | História de Usuário |
| --- | --- |
| **US1.1** | Como aluno, eu quero abrir uma solicitação de atendimento informando o motivo e anexando arquivos (opcional), para que o coordenador entenda minha necessidade antes da conversa. |
| **US1.2** | Como coordenador, eu quero visualizar uma fila de solicitações pendentes com os dados do aluno, para que eu possa priorizar e organizar os atendimentos. |
| **US1.3** | Como coordenador, eu quero atualizar o status de uma solicitação (pendente, em andamento, concluída), para que o processo tenha rastreabilidade. |
| **US1.4** | Como aluno, eu quero receber notificações quando o status da minha solicitação mudar, para que eu me mantenha informado sem precisar checar manualmente. |

> 📌 **Critérios de aceite:** ver Issue 1 no backlog original.

---

## 2. 🔧 Roteamento de Solicitações de Manutenção

### 🐛 Issue 2 — Roteamento automático por tipo (Issue Principal)

**Prioridade:** 🔴 Alta

| ID | História de Usuário |
| --- | --- |
| **US2.1** | Como aluno/solicitante, eu quero classificar o tipo de manutenção ao abrir um chamado, para que ele seja direcionado automaticamente ao setor correto. |
| **US2.2** | Como coordenador/administrador, eu quero visualizar um relatório/painel simples mostrando para qual setor cada chamado foi enviado, para que eu tenha visibilidade do fluxo de atendimentos. |

---

### 🐛 Issue 2.1 — Manutenção de Equipamentos

**Prioridade:** 🟡 Média

| ID | História de Usuário |
| --- | --- |
| **US2.3** | Como solicitante, eu quero que, ao selecionar "Equipamento" como tipo de manutenção, o chamado seja enviado automaticamente para o Auxiliar Docente e a Coordenação, para que eu não precise indicar o destinatário manualmente. |
| **US2.4** | Como Auxiliar Docente/Coordenador, eu quero receber uma notificação (e-mail/sistema) ao surgir um novo chamado de equipamento, para que eu possa agir rapidamente. |

---

### 🐛 Issue 2.2 — Manutenção Geral (predial)

**Prioridade:** 🟡 Média

| ID | História de Usuário |
| --- | --- |
| **US2.5** | Como solicitante, eu quero que, ao selecionar "Geral/Predial" como tipo de manutenção, o chamado seja enviado automaticamente para a Administração, para que o atendimento não dependa de redirecionamento manual da Coordenação. |
| **US2.6** | Como responsável da Administração, eu quero receber notificação de novos chamados gerais/prediais, para que eu possa providenciar o reparo com agilidade. |

---

## 3. 🚌 Passe Escolar / Transporte EMTU

### 🐛 Issue 3 — Cadastro de Solicitação de Passe Escolar / EMTU

**Prioridade:** 🟣 Crítica

| ID | História de Usuário |
| --- | --- |
| **US3.1** | Como aluno, eu quero preencher e enviar um cadastro de solicitação de passe/transporte EMTU, para que eu obtenha o benefício do transporte escolar. |
| **US3.2** | Como aluno, eu quero que o sistema valide os dados obrigatórios do convênio EMTU antes do envio, para que eu evite erros e retrabalho na solicitação. |
| **US3.3** | Como coordenador/administrador, eu quero consultar e exportar as solicitações de passe recebidas, para que eu possa processá-las junto ao convênio EMTU. |

---

## 4. 📝 Cancelamento/Trancamento e Pesquisa Institucional

### 🐛 Issue 4 — Solicitação de Cancelamento/Trancamento de matrícula

**Prioridade:** 🔴 Alta

| ID | História de Usuário |
| --- | --- |
| **US4.1** | Como aluno, eu quero abrir uma solicitação de cancelamento ou trancamento, escolhendo o tipo e descrevendo o motivo, para que a Coordenação entenda minha decisão e dê andamento ao processo. |
| **US4.2** | Como coordenador, eu quero visualizar a solicitação com o motivo informado pelo aluno, para que eu possa avaliar o caso adequadamente. |
| **US4.3** | Como aluno, eu quero acompanhar o status da minha solicitação (recebida, em análise, concluída), para que eu saiba em que etapa o processo está. |

---

### 🐛 Issue 5 — Interface de pesquisa institucional (CPA/Coordenadores)

**Prioridade:** 🔴 Alta

| ID | História de Usuário |
| --- | --- |
| **US5.1** | Como membro da CPA/Coordenador, eu quero criar e consultar pesquisas institucionais pelo sistema, para que eu possa levantar informações relevantes sobre a instituição. |
| **US5.2** | Como membro da CPA/Coordenador, eu quero filtrar e visualizar resultados agregados (por período, curso, motivo etc.), para que eu possa analisar tendências e tomar decisões. |
| **US5.3** | Como administrador do sistema, eu quero restringir o acesso a essa funcionalidade apenas aos perfis de CPA e Coordenação, para que dados sensíveis não sejam expostos indevidamente. |

---

## 5. 💡 Caixa de Sugestão

### 🐛 Issue 6 — Caixa de Sugestão para alunos

**Prioridade:** 🟡 Média

| ID | História de Usuário |
| --- | --- |
| **US6.1** | Como aluno, eu quero enviar uma sugestão, ideia ou crítica construtiva pelo sistema, para que eu possa contribuir com melhorias na instituição. |
| **US6.2** | Como aluno, eu quero escolher entre enviar a sugestão de forma identificada ou anônima, para que eu me sinta confortável ao compartilhar minha opinião. |
| **US6.3** | Como responsável (coordenação/administração), eu quero visualizar as sugestões recebidas em uma listagem simples, para que eu possa avaliá-las e agir quando pertinente. |

---

## 6. 🗺️ Mapa de Sala

### 🐛 Issue 7 — Acesso ao Mapa de Sala

**Prioridade:** 🟡 Média

| ID | História de Usuário |
| --- | --- |
| **US7.1** | Como usuário (aluno/professor), eu quero acessar uma tela de Mapa de Sala pelo sistema, para que eu possa localizar salas rapidamente. |
| **US7.2** | Como usuário, eu quero visualizar informações mínimas de localização (bloco, andar, número), para que eu não me perca dentro do campus. |
| **US7.3** | Como gestor do sistema, eu preciso definir o público-alvo de acesso ao mapa (aluno, professor ou ambos), para que o escopo da funcionalidade fique claro antes da implementação. |
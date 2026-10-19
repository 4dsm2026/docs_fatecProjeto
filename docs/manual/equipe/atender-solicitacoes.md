---
sidebar_position: 2
title: Atender solicitações
---

# Atender solicitações (chamados)

## Encontrar os chamados

Em **Todos os Chamados** ficam todas as solicitações abertas pelos alunos.

![Lista de chamados](/img/manual/admin-02-chamados.webp)

- **Lista** ou **Kanban**: alterne entre a tabela e o quadro com uma coluna por status.
- **Busca** por protocolo, título, solicitante ou responsável.
- **Filtros** por status, prioridade, nível e setor; ordenação por data de criação.
- **Detalhes** abre o chamado.

## O chamado por dentro

![Detalhe de um chamado](/img/manual/admin-03-chamado-detalhe.webp)

| Bloco | O que mostra |
|---|---|
| **Cabeçalho** | Protocolo, título, status, prioridade, nível, quem criou, responsável e setor |
| **Roteamento do Catálogo** | O serviço escolhido pelo aluno e o setor de destino inicial |
| **Chat do Chamado** | A conversa com o aluno |
| **Campos específicos do serviço** | O que o aluno preencheu no assistente |
| **Dados acadêmicos** | O cadastro do aluno e os dados que ele informou no pedido |
| **Anexos** | Arquivos enviados pelo aluno e pela equipe (até 10 MB cada) |
| **Atribuição & Status** | Onde a equipe muda status, prioridade, nível e responsável |
| **Histórico de status** | Cada mudança de status, com data e autor |

## Responder ao aluno

Escreva no **Chat do Chamado** e envie com o botão ou **Ctrl+Enter**. O aluno recebe uma notificação e vê a mensagem na página da solicitação.

## Mudar status, prioridade e nível

Em **Atribuição & Status**:

1. Ajuste **Status**, **Prioridade** (Baixa, Média, Alta, Urgente) e **Nível** (N1, N2, N3).
2. Clique em **Salvar**.

Atalhos: **Marcar como resolvido** salva o chamado como *Resolvido*; **Reabrir** volta para *Aberto*.

:::note Responsável
Por enquanto, o responsável é informado pelo **identificador do usuário** no campo *Responsável (ID do usuário)*. A troca por uma lista com os nomes da equipe está prevista.
:::

## Qual status usar

| Status | Use quando | Selo que aparece nas listas |
|---|---|---|
| **Aberto** | O chamado chegou e ninguém começou | Solicitação recebida pela Fatec. |
| **Em atendimento** | Alguém da equipe está cuidando | Em análise pelo setor responsável. |
| **Aguardando usuário** | Falta algo do aluno: informação, documento, confirmação. Diga na conversa **o que** falta | Aguardando documento ou resposta do aluno. |
| **Resolvido** | O pedido foi atendido | Solicitação respondida. |
| **Encerrado** | Não há mais nada a fazer no chamado | Atendimento finalizado. |

Hoje o sistema não restringe as mudanças de status: qualquer status pode ir para qualquer outro.

:::caution Quando o aluno responder
Se o chamado está em **Aguardando usuário** e o aluno responde ou anexa um arquivo, o status **não muda sozinho**: o aluno continua vendo que a Fatec espera por ele. Ao ler a resposta, volte o status para **Em atendimento**.
:::

:::tip Boas práticas
- Ao mudar para **Aguardando usuário**, escreva no chat exatamente o que o aluno precisa enviar.
- Antes de **Resolvido**, deixe no chat a resposta final ou onde retirar o documento.
:::

## Setor do chamado

O setor é definido na abertura, a partir do serviço escolhido no catálogo (veja [Setores](../administracao/setores.md#como-o-chamado-chega-ao-setor)). Ainda **não é possível mudar o setor pelo painel** (encaminhar para outra área); isso está [planejado](https://github.com/4dsm2026/frontend_fatecProjeto/issues/251). Enquanto isso, combine com a outra área pela conversa ou atribua um responsável de lá.

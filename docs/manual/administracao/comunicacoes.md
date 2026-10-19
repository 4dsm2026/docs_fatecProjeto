---
sidebar_position: 4
title: Comunicações (e-mails)
---

# Comunicações: modelos de e-mail

Em **Comunicações**, o administrador edita os modelos dos e-mails do sistema.

![Comunicações](/img/manual/admin-07-comunicacoes.webp)

:::warning Os modelos ainda não são usados nos envios automáticos
Hoje, o sistema envia por e-mail apenas o **link de primeiro acesso** e o de **redefinição de senha**, com um texto fixo. Os modelos desta tela ficam guardados e podem ser testados com **Enviar teste**, mas abertura de chamado, mudança de status, mensagens e anexos **não geram e-mail**: esses avisos chegam só pelas [notificações do sistema](../aluno/notificacoes.md). A ligação dos modelos aos envios está [planejada](https://github.com/4dsm2026/backend_fatecProjeto/issues/116).
:::

## Modelos disponíveis

| Modelo | Evento para o qual foi preparado |
|---|---|
| Bem-vindo — Primeiro acesso | Conta criada, com o link de primeiro acesso |
| Resetar senha | Pedido de "Esqueci a senha" |
| Chamado aberto | O aluno abriu uma solicitação |
| Atualização de chamado (status) | O status do chamado mudou |
| Chamado resolvido | O chamado foi marcado como resolvido |
| Aguardando ação do aluno | O chamado foi para "Aguardando usuário" |
| Nova mensagem no chamado | Nova mensagem na conversa |
| Novo anexo no chamado | Novo arquivo anexado |

## Editar um modelo

1. Escolha o modelo na lista (use a busca por nome ou chave).
2. Ajuste o **Assunto** e o texto.
3. **Habilitado** liga ou desliga o modelo.
4. **Enviar teste** manda um exemplo para conferir o resultado.
5. Clique em **Salvar**.

### Variáveis

O texto pode usar variáveis entre chaves duplas, que são trocadas pelos dados reais. Por exemplo:

- `{{aluno.nome}}`, `{{chamado.protocolo}}`, `{{chamado.titulo}}`, `{{chamado.status}}`
- `{{mensagem.conteudo}}`, `{{autor.nome}}`, `{{setor.nome}}`
- `{{links.portalAluno}}`, `{{links.portalAlunoChamado}}`, `{{links.redefinirSenha}}`

## Backup

**Exportar JSON** baixa todos os modelos; **Importar** restaura a partir desse arquivo. Exporte antes de grandes mudanças.

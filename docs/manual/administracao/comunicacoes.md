---
sidebar_position: 4
title: Comunicações (e-mails)
---

# Comunicações: modelos de e-mail

O sistema envia e-mails automáticos em momentos importantes. Em **Comunicações**, o administrador edita o texto de cada um.

![Comunicações](/img/manual/admin-07-comunicacoes.webp)

## Modelos disponíveis

| Modelo | Quando é enviado |
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
3. Use **Habilitado** para ligar ou desligar o envio desse e-mail.
4. **Enviar teste** manda um exemplo para conferir o resultado.
5. Clique em **Salvar**.

### Variáveis

O texto pode usar variáveis entre chaves duplas, que o sistema troca pelos dados reais no envio. Por exemplo:

- `{{aluno.nome}}`, `{{chamado.protocolo}}`, `{{chamado.titulo}}`, `{{chamado.status}}`
- `{{mensagem.conteudo}}`, `{{autor.nome}}`, `{{setor.nome}}`
- `{{links.portalAluno}}`, `{{links.portalAlunoChamado}}`, `{{links.redefinirSenha}}`

## Backup

**Exportar JSON** baixa todos os modelos; **Importar** restaura a partir desse arquivo. Exporte antes de grandes mudanças.

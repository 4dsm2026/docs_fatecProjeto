---
sidebar_position: 1
slug: /good_practices
title: Estrutura de Pastas e Como Contribuir
---

# 📂 Estrutura de Pastas e Como Contribuir

Todo o conteúdo exibido no portal fica dentro do diretório `docs/`. Cada pasta pode representar uma categoria de documentação no menu lateral.

```text
docs_fatecProjeto/
├── docs/
│   ├── architecture/     # Diagramas C4 e documentação de arquitetura
│   ├── processes/        # Fluxos e regras de negócio (.md)
│   └── ui-ux/            # Protótipos, histórias de usuário e PDFs
├── src/pages/             # Páginas customizadas (incluindo esta Home)
└── docusaurus.config.ts   # Configuração central do site e rotas
```

## Como criar um novo documento

### 1. Criar o arquivo

Crie um arquivo com a extensão `.md` dentro da subpasta correspondente.

Por exemplo:

```text
docs/processes/novo-fluxo.md
```

### 2. Adicionar o cabeçalho

No início do arquivo, adicione o front matter para definir o título e a posição do documento na barra lateral:

```markdown
---
sidebar_position: 2
title: Nome do Meu Documento
---

# Conteúdo Aqui...
```

* `sidebar_position`: define a posição do documento no menu lateral.
* `title`: define o título exibido para o documento.

### 3. Salvar o arquivo

Salve o arquivo dentro da pasta `docs/`.

Se o comando abaixo estiver sendo executado:

```bash
npm run start
```

o Docusaurus atualizará o site automaticamente e o novo documento ficará disponível na documentação e no menu lateral.

## 📌 Resumo

Para adicionar uma nova documentação:

1. Crie um arquivo `.md` dentro da pasta adequada.
2. Adicione o `front matter` com `sidebar_position` e `title`.
3. Escreva o conteúdo em Markdown.
4. Salve o arquivo.
5. Verifique o resultado no Docusaurus.

<a href="https://github.com/4dsm2026" target="_blank">
  <img alt="WorkFlow" src="https://capsule-render.vercel.app/api?type=waving&color=0:B71C1C,100:FF1744&height=200&section=header&text=WorkFlow&fontSize=80&fontAlignY=35&animation=fadeIn&fontColor=white" width="100%"/>
</a>

# WorkFlow FATEC — Documentação

[![Site](https://img.shields.io/badge/site-publicado-0075ca)](https://4dsm2026.github.io/docs_fatecProjeto/)
[![Deploy](https://github.com/4dsm2026/docs_fatecProjeto/actions/workflows/deploy.yml/badge.svg)](https://github.com/4dsm2026/docs_fatecProjeto/actions/workflows/deploy.yml)
[![Versão](https://img.shields.io/github/v/release/4dsm2026/docs_fatecProjeto?label=vers%C3%A3o)](https://github.com/4dsm2026/docs_fatecProjeto/releases)

Site de documentação do WorkFlow FATEC, feito com [Docusaurus](https://docusaurus.io/) e publicado em **<https://4dsm2026.github.io/docs_fatecProjeto/>**.

## O que fica aqui (e o que não fica)

Este site documenta **o produto**, para quem usa ou avalia o sistema. O que muda junto com o código fica no GitHub.

| Fica neste site | Fica no GitHub |
|---|---|
| **Manual do usuário** (aluno, secretaria, administração) | Como rodar e configurar cada projeto → README de cada repositório |
| **Processos e regras** de negócio, fluxo BPMN | Guia de contribuição, issues, branches e PRs → [4dsm2026/.github](https://github.com/4dsm2026/.github) |
| **Arquitetura** (diagramas C4) | Trabalho em andamento → [quadro do projeto](https://github.com/orgs/4dsm2026/projects/3) |
| **Qualidade e UX**: planos e relatórios de teste | Histórico técnico de versões → Releases de cada repositório |
| **Novidades**: o que mudou em cada versão, em linguagem de usuário | Referência da API → Swagger do backend (`/docs`) |

## Estrutura

```text
docs/
├── manual/           # Manual do usuário (menu "Manual do usuário")
│   ├── aluno/
│   ├── equipe/
│   └── administracao/
├── processes/        # Processos e regras de negócio  ┐
├── Diagrama_BPMN/    # Fluxo de atendimento           │ menu "Sistema"
├── Diagrama_C4/      # Arquitetura                    │
└── ui_ux/            # Qualidade e UX                 ┘
blog/                 # Novidades: um arquivo por versão
src/pages/index.tsx   # Página inicial
sidebars.ts           # Menus laterais
```

## Rodar localmente

```bash
npm ci
npm start          # http://localhost:3000/docs_fatecProjeto/
npm run build      # gera o site em build/ (o mesmo que o deploy faz)
```

O `npm ci` também ativa os hooks do git (veja o [guia de contribuição](https://github.com/4dsm2026/.github/blob/main/CONTRIBUTING.md#hooks-do-git)).

## Como contribuir

1. Crie (ou pegue) uma issue e uma branch: `docs/issue-<número>-<descrição>`.
2. Adicione ou edite o arquivo `.md` na pasta certa. A página entra no menu sozinha; a ordem vem do `sidebar_position` no início do arquivo:

   ```markdown
   ---
   sidebar_position: 2
   title: Título da página
   ---
   ```

3. Rode `npm start` e confira a página.
4. Abra o PR para `main`. Depois do merge, o site é publicado automaticamente.

### Imagens

As capturas de tela do manual **não ficam no repositório**: ficam no Cloudinary (conta `vslablah`, pasta `fatec/manual` só para organizar), para o repositório não crescer.

- Converta para **WebP** (até ~300 KB): `cwebp -q 88 tela.png -o tela.webp`.
- Envie o arquivo para a pasta `fatec/manual` no Cloudinary, **mantendo o nome** (ex.: `aluno-19-exemplo.webp`). O nome do arquivo (sem a extensão) é o que vai na URL; a pasta não entra. Use nomes únicos.
- Use em Markdown **sem a extensão**: `![descrição](https://res.cloudinary.com/vslablah/image/upload/f_auto,q_auto/aluno-19-exemplo)`.
- Capturas de tela **só com dados de teste**, nunca com dados reais de alunos ou servidores.
- Logo e favicon continuam em `static/img/`, pois o build do site precisa deles.

### Vídeos, PDFs e arquivos grandes

Não faça commit de vídeos, `.zip` ou PDFs grandes (o hook `pre-commit` bloqueia arquivos acima de 5 MB). Anexe-os à **Release** da versão ou ao PR/issue do teste e coloque o link na página.

### Novidades

A cada nova versão do sistema, crie `blog/AAAA-MM-DD-vX-Y-Z.md` contando, em linguagem de usuário, o que mudou para alunos e para a equipe.

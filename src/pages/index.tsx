import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Documentação oficial do projeto WorkFlow Fatec">
      
      {/* Banner Principal */}
      <div style={{width: '100%', overflow: 'hidden'}}>
        <a href="https://github.com/4dsm2026/docs_fatecProjeto" target="_blank" rel="noopener noreferrer">
          <img
            src="https://capsule-render.vercel.app/api?type=waving&color=0:B71C1C,100:FF1744&height=200&section=header&text=WorkFlow&fontSize=80&fontAlignY=35&animation=fadeIn&fontColor=white"
            alt="WorkFlow Header"
            style={{width: '100%', display: 'block'}}
          />
        </a>
      </div>

      <main className="container margin-vert--xl" style={{maxWidth: '860px'}}>
        
        {/* Status */}
        <div style={{marginBottom: '1.5rem'}}>
          <img 
            src="https://img.shields.io/badge/status-ativo-brightgreen" 
            alt="Status Ativo" 
          />
        </div>

        {/* Execução Local */}
        <section className="margin-bottom--xl">
          <h2>🚀 Executar a Documentação Localmente</h2>
          <p>Para visualizar e testar as alterações em tempo real no seu navegador:</p>
          
          <CodeBlock language="bash">
{`npm install
npm run start`}
          </CodeBlock>
          <p>O servidor subirá em <code>http://localhost:3000</code> com <em>live reload</em>.</p>
        </section>

        <hr className="margin-vert--lg" />

        {/* Como Acessar e Navegar */}
        <section className="margin-bottom--xl">
          <h2>📖 Como Acessar a Documentação</h2>
          <p>
            A documentação completa dos fluxos, regras e arquitetura fica disponível na aba superior:
          </p>
          <div className="alert alert--info margin-bottom--md" role="alert">
            <p>
              👉 <strong>Clique em "Documentação"</strong> na barra de navegação superior (ou acesse diretamente pelo botão abaixo) para abrir a barra lateral com todas as categorias do projeto.
            </p>
          </div>
          <Link
            className="button button--primary button--lg"
            to="/docs/processes">
            Ir para a Documentação 📑
          </Link>
        </section>

        <hr className="margin-vert--lg" />

        {/* Estrutura de Pastas e Como Adicionar Conteúdo */}
        <section className="margin-bottom--xl">
          <h2>📂 Estrutura de Pastas e Como Contribuir</h2>
          <p>
            Todo o conteúdo exibido no portal fica dentro do diretório <code>docs/</code>. Cada pasta vira automaticamente uma categoria no menu lateral:
          </p>

          <CodeBlock language="text">
{`docs_fatecProjeto/
├── docs/
│   ├── architecture/     # Diagramas C4 e documentação de arquitetura
│   ├── processes/        # Fluxos e regras de negócio (.md)
│   └── ui-ux/            # Protótipos, histórias de usuário e PDFs
├── src/pages/            # Páginas customizadas (incluindo esta Home)
└── docusaurus.config.ts  # Configuração central do site e rotas`}
          </CodeBlock>

          <h3>Como criar um novo documento:</h3>
          <ol>
            <li>
              Crie um arquivo com a extensão <code>.md</code> dentro da subpasta correspondente (ex: <code>docs/processes/novo-fluxo.md</code>).
            </li>
            <li>
              Adicione o cabeçalho no início do arquivo para definir o título e a posição na barra lateral:
              <CodeBlock language="markdown">
{`---
sidebar_position: 2
title: Nome do Meu Documento
---

# Conteúdo Aqui...`}
              </CodeBlock>
            </li>
            <li>
              Salve o arquivo. Se o comando <code>npm run start</code> estiver rodando, a nova página aparecerá automaticamente no menu lateral.
            </li>
          </ol>
        </section>

      </main>
    </Layout>
  );
}
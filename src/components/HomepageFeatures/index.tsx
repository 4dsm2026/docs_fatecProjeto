import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

type CardItem = {
  icon: string;
  title: string;
  description: string;
  href: string; // caminho relativo ao baseUrl — o Link já aplica o baseUrl sozinho
};

const cards: CardItem[] = [
  {
    icon: '→',
    title: 'Como começar',
    description: 'Primeiros passos para começar a trabalhar com o Workflow.',
    href: '/docs_fatecProjeto/getting_started/read', // ✅ confirmado
  },
  {
    icon: '✓',
    title: 'Guia de boas práticas',
    description: 'Padrões, recomendações e práticas para manter o projeto organizado.',
    href: '/docs/boas_praticas', // TODO: confirmar no sidebars.js
  },
  {
    icon: '◇',
    title: 'Arquitetura',
    description: 'Estrutura técnica, componentes e organização do sistema.',
    href: '/docs/arquitetura', // TODO: confirmar no sidebars.js
  },
  {
    icon: '↻',
    title: 'Processos',
    description: 'Fluxos de trabalho, desenvolvimento e colaboração da equipe.',
    href: '/docs/processos', // TODO: confirmar no sidebars.js
  },
  {
    icon: '□',
    title: 'UI & UX',
    description: 'Diretrizes de interface, experiência e identidade visual.',
    href: '/docs/ui_ux', // TODO: confirmar no sidebars.js
  },
];

function WorkflowCard({ icon, title, description, href }: CardItem) {
  return (
    <Link className={styles.workflowCard} to={href}>
      <div className={styles.workflowCardIcon}>{icon}</div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>WorkFlow</h1>
        <p className={styles.heroSubtitle}>
          Documentação central do projeto — fluxos, arquitetura e padrões
          usados pela equipe no desenvolvimento do sistema.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/getting_started">
            Ver a documentação
          </Link>
          <Link
            className={`button button--lg ${styles.buttonOutline}`}
            href="https://github.com/4dsm2026/docs_fatecProjeto"
            target="_blank"
            rel="noopener noreferrer">
            Repositório no GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Documentação oficial do projeto WorkFlow Fatec">
      <HeroSection />
      <main className="container margin-vert--xl" style={{ maxWidth: '960px' }}>
        <div className={styles.workflowCards}>
          {cards.map((card) => (
            <WorkflowCard key={card.title} {...card} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
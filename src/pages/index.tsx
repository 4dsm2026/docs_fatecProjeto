import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import {
  Rocket,
  Ruler,
  Workflow,
  Layers,
  GitBranch,
  Palette,
} from 'lucide-react';

type CardItem = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string; // caminho relativo ao baseUrl, dentro de /docs_fatecProjeto/
};

const cards: CardItem[] = [
  {
    icon: <Rocket size={24} />,
    title: 'Como Começar',
    description: 'Primeiros passos para começar a trabalhar com o Workflow.',
    href: '/docs_fatecProjeto/getting_started',
  },
  {
    icon: <Ruler size={24} />,
    title: 'Guia de boas práticas',
    description: 'Padrões, recomendações e práticas para manter o projeto organizado.',
    href: '/docs_fatecProjeto/good_practices',
  },
  {
    icon: <Workflow size={24} />,
    title: 'Processos',
    description: 'Fluxos de trabalho, desenvolvimento e colaboração da equipe.',
    href: '/docs_fatecProjeto/processes',
  },
  {
    icon: <Layers size={24} />,
    title: 'Diagrama — C4',
    description: 'Visão da arquitetura do sistema em diferentes níveis de abstração.',
    href: '/docs_fatecProjeto/Diagrama_C4',
  },
  {
    icon: <GitBranch size={24} />,
    title: 'Diagrama_BPMN',
    description: 'Modelagem dos processos de negócio e fluxos da aplicação.',
    href: '/docs_fatecProjeto/Diagrama_bpmn',
  },
  {
    icon: <Palette size={24} />,
    title: 'UI & UX',
    description: 'Diretrizes de interface, experiência e identidade visual.',
    href: '/docs_fatecProjeto/ui_ux',
  },
];

function WorkflowCard({ icon, title, description, href }: CardItem) {
  return (
    <Link className={styles.workflowCard} to={useBaseUrl(href)}>
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
          <Link
            className="button button--primary button--lg"
            to={useBaseUrl('/docs_fatecProjeto/getting_started/')}>
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
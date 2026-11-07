import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {
  GraduationCap,
  Users,
  Settings,
  Workflow,
  Layers,
  ClipboardCheck,
} from 'lucide-react';

type CardItem = {
  icon: ReactNode;
  title: string;
  description: string;
  to: string; // caminho dentro do site; o Link aplica o baseUrl sozinho
};

const cards: CardItem[] = [
  {
    icon: <GraduationCap size={24} />,
    title: 'Sou aluno',
    description: 'Abrir e acompanhar solicitações, conversar com a secretaria, enviar sugestões.',
    to: '/manual/aluno/visao-geral',
  },
  {
    icon: <Users size={24} />,
    title: 'Secretaria e equipe técnica',
    description: 'Atender chamados, mudar status e prioridade, responder sugestões, relatórios.',
    to: '/manual/equipe/visao-geral',
  },
  {
    icon: <Settings size={24} />,
    title: 'Administração',
    description: 'Cadastro de alunos, funcionários e setores, modelos de e-mail e permissões.',
    to: '/manual/administracao/alunos',
  },
  {
    icon: <Workflow size={24} />,
    title: 'Processos e regras',
    description: 'Solicitações acadêmicas, histórias de usuário e o fluxo de atendimento (BPMN).',
    to: '/processes',
  },
  {
    icon: <Layers size={24} />,
    title: 'Arquitetura',
    description: 'Como o sistema é organizado, nos diagramas C4.',
    to: '/Diagrama_C4',
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: 'Qualidade e UX',
    description: 'Planos de teste, evidências e melhorias de experiência.',
    to: '/ui_ux',
  },
];

function WorkflowCard({ icon, title, description, to }: CardItem) {
  return (
    <Link className={styles.workflowCard} to={to}>
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
        <h1 className={styles.heroTitle}>WorkFlow FATEC</h1>
        <p className={styles.heroSubtitle}>
          Portal de atendimento acadêmico da Fatec. Aqui está o manual de uso
          para alunos e equipe, e a documentação de como o sistema funciona.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/manual">
            Abrir o manual
          </Link>
          <Link className={`button button--lg ${styles.buttonOutline}`} to="/novidades">
            Novidades
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
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

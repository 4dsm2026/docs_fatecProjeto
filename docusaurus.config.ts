import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WorkFlow FATEC',
  tagline: 'Manual do usuário e documentação do sistema de atendimento acadêmico',
  favicon: 'img/wf_logo.ico',

  future: {
    v4: true,
  },

  // Configuração do GitHub Pages
  url: 'https://4dsm2026.github.io',
  baseUrl: '/docs_fatecProjeto/',
  organizationName: '4dsm2026',
  projectName: 'docs_fatecProjeto',
  trailingSlash: false,

  // Link quebrado derruba o build: o site publicado nunca fica com link para página que não existe.
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  // ✅ Mermaid — precisa ficar DENTRO do config
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        // "Novidades": uma página por versão, em linguagem de usuário.
        blog: {
          routeBasePath: 'novidades',
          blogTitle: 'Novidades',
          blogDescription: 'O que mudou no WorkFlow FATEC a cada versão.',
          blogSidebarTitle: 'Versões',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/wf_logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'WorkFlow',
      logo: {
        alt: 'Logo',
        src: 'img/wf_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual do usuário',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sistemaSidebar',
          position: 'left',
          label: 'Sistema',
        },
        {to: '/novidades', label: 'Novidades', position: 'left'},
        {
          href: 'https://github.com/4dsm2026',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Manual do usuário',
          items: [
            {label: 'Primeiros passos', to: '/manual/primeiros-passos'},
            {label: 'Aluno', to: '/manual/aluno/visao-geral'},
            {label: 'Secretaria e equipe técnica', to: '/manual/equipe/visao-geral'},
            {label: 'Administração', to: '/manual/administracao/alunos'},
            {label: 'Dúvidas frequentes', to: '/manual/faq'},
          ],
        },
        {
          title: 'Sistema',
          items: [
            {label: 'Processos', to: '/processes'},
            {label: 'Arquitetura (C4)', to: '/Diagrama_C4'},
            {label: 'Qualidade e UX', to: '/ui_ux'},
            {label: 'Novidades', to: '/novidades'},
          ],
        },
        {
          title: 'Desenvolvimento',
          items: [
            {label: 'Repositórios', href: 'https://github.com/4dsm2026'},
            {label: 'Guia de contribuição', href: 'https://github.com/4dsm2026/.github/blob/main/CONTRIBUTING.md'},
            {label: 'Quadro do projeto', href: 'https://github.com/orgs/4dsm2026/projects/3'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} WorkFlow FATEC — turma 4º DSM 2026. Feito com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // ✅ Tema do Mermaid (light/dark) — opcional, mas recomendado
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
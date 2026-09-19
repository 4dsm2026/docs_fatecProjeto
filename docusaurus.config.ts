import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentação do Projeto',
  tagline: 'Documentação técnica e processos',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Configuração do GitHub Pages
  url: 'https://4dsm2026.github.io',
  baseUrl: '/docs_fatecProjeto/', // Ajustado para o nome real do repositório
  organizationName: '4dsm2026',
  projectName: 'docs_fatecProjeto',
  trailingSlash: false,

  // Não derruba o build se houver link quebrado
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false, // Desativado para focar na documentação
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Docs Fatec',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/4dsm2026/docs_fatecProjeto',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Início',
              to: '/docs/processes', // Aponta para a pasta real existente
            },
          ],
        },
        {
          title: 'Repositório',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/4dsm2026/docs_fatecProjeto',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fatec Projeto. Criado com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
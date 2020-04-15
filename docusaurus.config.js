module.exports = {
  title: 'デモ',
  tagline: 'APIを利用したダウンロードのデモとサンプルコードになります',
  url: 'https://demo-8ATrCSuTaG6pR2k6.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'demo-8ATrCSuTaG6pR2k6', // Usually your GitHub org/user name.
  projectName: 'demo-8ATrCSuTaG6pR2k6.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DEMO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

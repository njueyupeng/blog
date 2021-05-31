/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '于先生',
  tagline: '小于是一个喜欢学习的程序员，在这里与你分享我觉得值得分享的事情！',
  url: 'http://how2js.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'how2js.cn', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '于先生',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '笔记',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/njueyupeng',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '联系我',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/njueyupeng',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} , Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editCurrentVersion: false,
          editUrl:
          'https://github.com/njueyupeng/blog/edit/master/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: '于鹏的博客',
          blogDescription: '于鹏的博客',
          // Please change this to your repo.
          blogSidebarCount:10,
          blogSidebarTitle: '最新文章',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

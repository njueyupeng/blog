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
    // announcementBar: {
    //   id: 'tip', // 用于标记此消息的任何值。
    //   content:
    //     '网站正在建设中，欢迎访问！',
    //   backgroundColor: '#fafbfc', // 默认为 `#fff`。
    //   textColor: '#091E42', // 默认为 `#000`。
    //   isCloseable: true, // 默认为 `true`。
    // },
    navbar: {
      title: '于鹏的个人网站',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      // style: 'primary', // primary dark
      hideOnScroll: false,
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: '笔记',
        },
        {to: '/blog', label: '博客', position: 'right'},
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
          routeBasePath: '/', // Set this value to '/'.
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          showLastUpdateTime: true,
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

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '微光 Lowlight',
    tagline: '提供一些音游下载的小站',
    url: 'https://lowi.ro',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    i18n: {
        defaultLocale: "zh-Hans",
        locales: ["zh-Hans"],
    },
    organizationName: 'Lytsu', // Usually your GitHub org/user name.
    projectName: 'lowlight', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Lytsu/lowlight/edit/v2/website/',
                    routeBasePath: "/",
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                /*blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Lytsu/lowlight/edit/v2/website/blog/',
                },*/
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: '微光 Lowlight',
            logo: {
                alt: 'Lowlight Logo',
                src: 'img/lowlight_maid.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'games',
                    position: 'left',
                    label: 'A Faint Light',
                },
                //{ to: '/blog', label: '博客', position: 'left' },
                {
                    label: 'Changelog',
                    to: 'changelog',
                    position: 'right',
                },
                {
                    href: 'https://github.com/Lytsu/lowlight',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    label: 'bilibili',
                    href: 'https://space.bilibili.com/319171871',
                    position: 'right',
                }
            ],
            hideOnScroll: true,
        },
        footer: {
            style: 'dark',
            links: [{
                    title: '站点信息',
                    items: [{
                            label: '服务器状态',
                            href: 'https://status.lowi.ro/status/',
                        },
                        {
                            label: 'Changelog',
                            to: 'changelog',
                        },
                    ],
                },
                {
                    title: '网站政策',
                    items: [{
                            label: '使用条款',
                            to: 'policies/tos',
                        },
                        {
                            label: '隐私政策',
                            to: 'policies/privacy',
                        },
                        {
                            label: '未成年人健康守护',
                            to: 'policies/minor',
                        },
                        {
                            label: '转载规范',
                            to: 'policies/repost',
                        },
                        {
                            label: '收录标准',
                            to: 'policies/inclusion',
                        },
                    ]
                },
                {
                    title: '友情链接',
                    items: [{
                            label: 'Konmai 音游下载站',
                            href: 'https://konmai.cn',
                        },
                        {
                            label: 'Rsplwe Blog',
                            href: 'https://www.rsplwe.com',
                        },
                        {
                            label: 'VicACG Community',
                            href: 'https://vikacg.com',
                        },
                        {
                            label: 'Karyl 工具箱',
                            href: 'https://bilibili.red',
                        },
                    ],
                },
                {
                    title: '社区',
                    items: [
                        /*{
                                                    label: '博客',
                                                    to: '/blog',
                                                },*/
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Lytsu/lowlight',
                        },
                        {
                            label: 'bilibili',
                            href: 'https://space.bilibili.com/319171871',
                        },
                        {
                            label: 'Telegram',
                            href: 'https://t.me/lowi.ro',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Intelligence office of Sailoud LLC. 使用 <a href="https://docusaurus.io/zh-CN">Docusaurus v2</a> 构建。`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;

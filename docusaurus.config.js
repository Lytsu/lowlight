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
    plugins: [
        [
            '@docusaurus/plugin-pwa',
            {
                debug: true,
                offlineModeActivationStrategies: [
                    'appInstalled',
                    'standalone',
                    'queryString',
                ],
                pwaHead: [{
                        tagName: 'link',
                        rel: 'icon',
                        href: '/img/icons/icon-512x512.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: '/manifest.json',
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: '#8e4bbc',
                    },
                    {
                        tagName: 'meta',
                        name: 'apple-mobile-web-app-capable',
                        content: 'yes',
                    },
                    {
                        tagName: 'meta',
                        name: 'apple-mobile-web-app-status-bar-style',
                        content: '#000',
                    },
                    {
                        tagName: 'link',
                        rel: 'apple-touch-icon',
                        href: '/img/icons/icon-512x512.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'mask-icon',
                        href: '/img/lowlight_maid.svg',
                        color: '#8e4bbc',
                    },
                    {
                        tagName: 'meta',
                        name: 'msapplication-TileImage',
                        content: '/img/icons/icon-512x512.png',
                    },
                    {
                        tagName: 'meta',
                        name: 'msapplication-TileColor',
                        content: '#000',
                    },
                ],
            },
        ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Lytsu/lowlight/edit/main/',
                    routeBasePath: "/",
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                blog: {
                    path: 'blog',
                    blogTitle: 'Lowlight 博客',
                    blogSidebarTitle: '所有文章',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    postsPerPage: 5,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} Intelligence office of Sailoud LLC.`,
                    },
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Lytsu/lowlight/edit/main/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        announcementBar: {
            id: 'support_us',
            content: '使用微光 Lowlight 的服务，即代表您已知悉并同意本站的<a href="policies/tos">使用条款</a>和<a href="policies/privacy">隐私政策</a>。<br>本站目前处于公开测试运营阶段，欢迎填写<a href="https://wj.qq.com/s2/1091099/5c62">问卷调查</a>来支持我们的工作。',
            backgroundColor: '#a26ac8',
            textColor: '#fff',
            isCloseable: false,
        },
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
                { to: '/blog', label: '博客', position: 'left' },
                {
                    label: '更新日志',
                    to: 'changelog',
                    position: 'right',
                },
                {
                    href: 'https://github.com/Lytsu/lowlight',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    label: '哔哩哔哩',
                    href: 'https://space.bilibili.com/319171871',
                    position: 'right',
                }
            ],
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
                            label: '更新日志',
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
                            label: '资源转载规范',
                            to: 'policies/repost',
                        },
                        {
                            label: '游戏收录标准',
                            to: 'policies/inclusion',
                        },
                    ]
                },
                {
                    title: '关注我们',
                    items: [{
                            label: '博客',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Lytsu/lowlight',
                        },
                        {
                            label: '哔哩哔哩',
                            href: 'https://space.bilibili.com/319171871',
                        },
                    ],
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
                        {
                            label: '空',
                            href: 'https://minasan.xyz',
                        },
                        {
                            label: '空白白白白白',
                            href: 'https://thneden.github.io',
                        }
                    ],
                },
            ],
            logo: {
                alt: 'Lowlight Academy Logo',
                src: 'img/academy_logo.png',
                href: 'https://space.bilibili.com/319171871',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Lowlight Academy, a proud part of Intelligence office of <a href="https://sailoud.com">Sailoud LLC</a>. <br>
            本项目使用 <a href="https://docusaurus.io/zh-CN">Docusaurus v2</a> 构建，并托管于 <a href="https://pages.cloudflare.com">CloudFlare Pages</a>。<br>
            首页封面图 Pixiv ID: <a href="https://www.pixiv.net/artworks/79558921">79558921</a> | <a href="https://www.pixiv.net/artworks/82358027">82358027</a> `,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        gtag: {
            trackingID: 'G-8T8LT5XQ63',
            anonymizeIP: true,
        },
    }),
};

module.exports = config;
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '微光 Lowlight',
    tagline: '「简单的移动端音游下载站」',
    url: 'https://lowi.ro',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },
    organizationName: 'Lytsu', // Usually your GitHub org/user name.
    projectName: 'lowlight', // Usually your repo name.
    plugins: [
        [
            '@easyops-cn/docusaurus-search-local',
            {
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                language: ["en", "zh"],
                highlightSearchTermsOnTargetPage: false,
                indexDocs: true,
                indexPages: true,
                translations: {
                    "search_placeholder": "搜索",
                    "see_all_results": "查看全部结果",
                    "no_results": "无结果。",
                    "search_results_for": "\"{{ keyword }}\"的搜索结果",
                    "search_the_documentation": "搜索文档",
                    "count_documents_found": "找到{{ count }}篇文档中含有关键词\"{{ keyword }}\"。",
                    "count_documents_found_plural": "找到{{ count }}篇文档中含有关键词\"{{ keyword }}\"。",
                    "no_documents_were_found": "没有找到相关文档。"
                }
            },
        ],
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
                        href: '/img/pwa/icon-512x512.png',
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
                        href: '/img/pwa/icon-512x512.png',
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
                        content: '/img/pwa/icon-512x512.png',
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
                        copyright: `Copyright © 2021 - ${new Date().getFullYear()} Lowlight.`,
                    },
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Lytsu/lowlight/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
                gtag: {
                    trackingID: 'G-GYBNM0NDE5',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        announcementBar: {
            id: 'support_us',
            content: '下载站的健康发展离不开您的支持。<a href="/info/donate">前往捐赠页→</a>',
            backgroundColor: '#a26ac8',
            textColor: '#fff',
            isCloseable: true,
        },
        navbar: {
            title: '微光 Lowlight',
            logo: {
                alt: 'Lowlight Logo',
                src: 'img/lowlight_maid.webp',
            },
            items: [{
                    type: 'doc',
                    docId: 'games',
                    position: 'left',
                    label: '游戏下载',
                },
                {
                    to: '/blog',
                    label: '站点博客',
                    position: 'left'
                },
                {
                    label: '更新日志',
                    to: 'changelog',
                    position: 'right',
                },
                {
                    label: '捐赠与支持',
                    to: 'info/donate',
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
                    title: '条款',
                    items: [{
                            label: '使用条款',
                            to: 'policies/tos',
                        },
                        {
                            label: '隐私政策',
                            to: 'policies/privacy',
                        },
                        {
                            label: '未成年人保护指引',
                            to: 'policies/minor',
                        },
                        {
                            label: '站点内容转载规范',
                            to: 'policies/repost',
                        },
                        {
                            label: '站点游戏收录标准',
                            to: 'policies/inclusion',
                        },
                        {
                            label: '版权与许可',
                            to: 'policies/licenses',
                        },
                    ]
                },
                {
                    title: '站点相关',
                    items: [{
                            label: '服务器状态',
                            href: 'https://stat.lowi.ro',
                        },
                        {
                            label: '更新日志',
                            to: 'changelog',
                        },
                        {
                            label: '使用帮助',
                            to: 'faq',
                        }, {
                            label: '捐赠支持',
                            to: 'info/donate'
                        }
                    ],
                },
                {
                    title: '社群',
                    items: [{
                            label: '站点博客',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub Repo',
                            href: 'https://github.com/Lytsu/lowlight',
                        },
                        {
                            label: '哔哩哔哩',
                            href: 'https://space.bilibili.com/319171871',
                        },
                    ],
                },
                {
                    title: '赞助商',
                    items: [{
                            label: 'PicACG 游戏区',
                            href: 'https://616.ro/',
                        },
                        {
                            label: 'VikACG 二次元社区',
                            href: 'https://vikacg.com',
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
                            label: '哔哩哔哩工具箱',
                            href: 'https://tool.rsplwe.com',
                        },
                        {
                            label: '空白白白白白',
                            href: 'https://thneden.github.io',
                        },
                        {
                            label: 'KOMANI 工具箱',
                            href: 'https://komani.moe'
                        }
                    ],
                },
            ],
            logo: {
                alt: 'Team Lowlight Logo',
                src: 'img/team.png',
                href: '/info/project',
            },
            copyright: `
            <p><p>
            <p><small>
            Copyright © 2021 - ${new Date().getFullYear()} Team Lowlight. Bulit with <a href="https://docusaurus.io/zh-CN">Docusaurus</a>.<br>
            Google Play™ is a Trademark of Google Inc.<br>
            本站与 lowiro limited 和 SEGA Corporation 无任何关联。
            </small><p>`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
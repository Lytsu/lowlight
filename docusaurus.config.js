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
            '@easyops-cn/docusaurus-search-local',
            {
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                language: ["en", "zh"],
                // When applying `zh` in language, please install `nodejieba` in your project
                highlightSearchTermsOnTargetPage: false,
                indexDocs: true,
                indexPages: true,
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
                        copyright: `Copyright © ${new Date().getFullYear()} Lowlight.`,
                    },
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Lytsu/lowlight/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
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
            content: '您的支持可以帮助微光 Lowlight 健康发展，促进玩家社群整体受益。<a href="https://lowi.ro/info/donate">点此</a>前往捐赠页面。',
            backgroundColor: '#a26ac8',
            textColor: '#fff',
            isCloseable: false,
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
                    label: 'A Faint Light',
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
                    to: '/info/donate',
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
                    title: '网站政策',
                    items: [{
                            label: '用户使用条款',
                            to: 'policies/tos',
                        },
                        {
                            label: '隐私保护政策',
                            to: 'policies/privacy',
                        },
                        {
                            label: '未成年人保护',
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
                        {
                            label: '资源使用许可',
                            to: 'policies/licenses',
                        },
                    ]
                },
                {
                    title: '站点相关',
                    items: [{
                            label: '站点博客',
                            to: '/blog',
                        },
                        {
                            label: '服务器状态',
                            href: 'https://stat.lowi.ro',
                        },
                        {
                            label: '更新日志',
                            to: 'changelog',
                        },
                        {
                            label: '捐赠支持',
                            to: 'info/donate',
                        },
                    ],
                },
                {
                    title: '关注我们',
                    items: [{
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
                            label: 'Rytsu Blog',
                            href: 'https://rytsu.org',
                        },
                        {
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
                            label: '空',
                            href: 'https://minasan.xyz',
                        },
                        {
                            label: '空白白白白白',
                            href: 'https://thneden.github.io',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Lowlight Delight Logo',
                src: 'img/delight_logo.png',
                href: 'https://lowi.ro/blog/2021/10/30/about-delight',
            },
            copyright: `
            <p>Copyright © ${new Date().getFullYear()} Team Lowlight. Powered by <a href="https://docusaurus.io/zh-CN">Docusaurus v2</a>.<br></p>
            <p><small>本网站中所使用的数据、图片等素材，其著作权属于原著作权人，本站仅以介绍为目的进行非商业的个人使用。</small><br>
            <small>域名「616.sb」及其所有相关资产由 Maverick（马尾理科）所持有，本站仅拥有其部分受限使用权。</small></p>
            <p><small>微光 Lowlight 倡导人人平等：<i>我们反对任何对出身地、民族、身体残障、年龄、性別认同和性取向的歧视。</small></i></p>`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
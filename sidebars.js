/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [
        "games",
        "desktop",
        "faq",
        {
            type: 'category',
            label: '指南文档',
            collapsed: false,
            items: [
                'documents/purchase',
                'documents/sai',
                'documents/appleid',
            ],
        },
        {
            type: 'category',
            label: '站点信息',
            collapsed: false,
            items: [
                'sideinfo/about',
                'sideinfo/donate',
                'sideinfo/support',
            ],
        },
        "changelog",
    ],
    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */
};

module.exports = sidebars;
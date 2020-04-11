module.exports = {
  title: 'ぼくをつくるばしょ。',
  description: 'I make blog and me.',
  theme: '@vuepress/blog',
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/kkato1030',
        },
        {
          type: 'facebook',
          link: 'https://www.facebook.com/bsk00wisteria',
        },
      ],
      copyright: [
        // {
        //   text: 'Privacy Policy',
        //   link: 'https://policies.google.com/privacy?hl=en-US',
        // },
        {
          text: 'Copyright © 2020 bokutsuku.',
          link: '/',
        },
      ],
    },
  },
}

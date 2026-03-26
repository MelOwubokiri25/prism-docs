import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Prism Design System',
  description: 'Component documentation for Prism 1.5',
  base: '/prism-docs/',

  themeConfig: {
    logo: { text: '◈' },

    nav: [
      { text: 'Foundations', link: '/foundations/variables' },
      { text: 'Components', link: '/components/large-button' },

    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
        ],
      },
      {
        text: 'Foundations',
        items: [
          { text: 'Variables', link: '/foundations/variables' },
          { text: 'Styles', link: '/foundations/styles' },
        ],
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Buttons',
            items: [
              { text: 'Large Button', link: '/components/large-button' },
              { text: 'Small Button', link: '/components/small-button' },
              { text: 'Action Button', link: '/components/action-button' },
              { text: 'Segmented Button', link: '/components/segmented-button' },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'figma',
        link: 'https://www.figma.com/design/FCxJehkjyuzdt6VJ8K2k4i/Reskin-Library---Prism-1.5',
      },
    ],

    footer: {
      message: 'Prism 1.5 Design System',
    },

    search: {
      provider: 'local',
    },
  },
})

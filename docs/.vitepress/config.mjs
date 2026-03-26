import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Prism Design System',
  description: 'Component documentation for Prism 1.5',
  base: '/prism-docs/',

  themeConfig: {
    logo: { text: '◈' },

    nav: [
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
        text: 'Components',
        items: [
          { text: 'Large Button', link: '/components/large-button' },
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

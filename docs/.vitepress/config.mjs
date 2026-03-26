import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Prism Design System',
  description: 'Component documentation for Prism 1.5',
  base: '/prism-docs/',

  themeConfig: {
    logo: { text: '◈' },

    nav: [
      { text: 'Design Tokens', link: '/foundations/variables' },
      { text: 'Foundation', link: '/foundation/color-palette' },
      { text: 'Atoms', link: '/atoms/avatar' },

    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
        ],
      },
      {
        text: 'Design Tokens',
        items: [
          { text: 'Variables', link: '/foundations/variables' },
          { text: 'Styles', link: '/foundations/styles' },
        ],
      },
      {
        text: 'Foundation',
        items: [
          { text: 'Color Palette', link: '/foundation/color-palette' },
          { text: 'Icons', link: '/foundation/icons' },
          { text: 'Typography', link: '/foundation/typography' },
          { text: 'Elevation', link: '/foundation/elevation' },
          { text: 'Border Radius', link: '/foundation/border-radius' },
        ],
      },
      {
        text: 'Atoms',
        items: [
          { text: 'Avatar', link: '/atoms/avatar' },
          { text: 'Badge', link: '/atoms/badge' },
          {
            text: 'Button',
            link: '/components/large-button',
            collapsed: true,
            items: [
              { text: 'Large Button', link: '/components/large-button' },
              { text: 'Small Button', link: '/components/small-button' },
              { text: 'Action Button', link: '/components/action-button' },
              { text: 'Segmented Button', link: '/components/segmented-button' },
            ],
          },
          { text: 'Checkbox', link: '/atoms/checkbox' },
          { text: 'Divider', link: '/atoms/divider' },
          { text: 'Dot Indicator', link: '/atoms/dot-indicator' },
          { text: 'Help Text', link: '/atoms/help-text' },
          { text: 'Icons', link: '/atoms/icons' },
          { text: 'Input / Text Field', link: '/atoms/input' },
          { text: 'Label', link: '/atoms/label' },
          { text: 'Link', link: '/atoms/link' },
          { text: 'Radio Button', link: '/atoms/radio-button' },
          { text: 'Select', link: '/atoms/select' },
          { text: 'Spinner / Loading Indicator', link: '/atoms/spinner' },
          { text: 'Stepper', link: '/atoms/stepper' },
          { text: 'Tag', link: '/atoms/tag' },
          { text: 'Textarea', link: '/atoms/textarea' },
          { text: 'Toggle / Switch', link: '/atoms/toggle' },
          { text: 'Tooltip', link: '/atoms/tooltip' },
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

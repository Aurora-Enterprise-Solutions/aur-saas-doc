const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Aurora SaaS',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/aur-saas-doc/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: `/icons/icon-1024x1024.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#20324A' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    locales: {
        '/': {
            // text for the language dropdown
            selectText: 'Idioma',
            // label for this locale in the language dropdown
            label: 'Español',
            // Aria Label for locale in the dropdown
            ariaLabel: 'Idiomas',
            // config for Service Worker
            serviceWorker: {
              updatePopup: {
                message: "Nuevo contenido disponible.",
                buttonText: "Actualizar"
              }
            },

            nav: [
                {
                  text: 'Guía',
                  link: '/guide/',
                }
            ],

            sidebar: {
                '/guide/': [
                  {
                    title: 'Guía',
                    collapsable: false,
                    children: [
                      '',
                      'first-steps',
                    ]
                  }
                ],
            },
        },
        '/en/': {
            // text for the language dropdown
            selectText: 'Languages',
            // label for this locale in the language dropdown
            label: 'English',
            // Aria Label for locale in the dropdown
            ariaLabel: 'Languages',
            // config for Service Worker
            serviceWorker: {
              updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
              }
            },

            nav: [
                {
                  text: 'Guide',
                  link: '/en/guide/',
                }
            ],

            sidebar: {
                '/en/guide/': [
                  {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                      '',
                      'first-steps',
                    ]
                  }
                ],
            },
        }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          popupComponent: 'SWUpdatePopup',
          updatePopup: {
              '/': {
                  message: 'Hay nuevo contenido disponible.',
                  buttonText: 'Actualizar'
              },
              '/en/': {
                  message: 'New content is available.',
                  buttonText: 'Update'
              }
          }
        }
      ]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'es-ES', // this will be set as the lang attribute on <html>
      title: 'Aurora SaaS',
      description: 'La documentación oficial'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Aurora SaaS',
      description: 'The official documentation'
    }
  }
}

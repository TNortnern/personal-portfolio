/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        'light-gray': '#e6e6e6',
        'primary-blue': '#3DC7C6',
        'primary-white': '#E0E0E0',
        'theme-blue': '#000f21',
        'very-light-gray': '#b8c5d7',
      },
      fontSize: {
        '60px': '60px',
        '70px': '70px',
      },
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}

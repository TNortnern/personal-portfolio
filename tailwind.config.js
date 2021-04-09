/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  tailwindcss: {
    // jit: true,
  },
  theme: {
    extend: {
      colors: {
        'light-gray': '#e6e6e6',
        'primary-blue': '#3DC7C6',
        'light-primary-blue': '#051931',
        'primary-white': '#E0E0E0',
        'theme-blue': '#000f21',
        'very-light-gray': '#b8c5d7',
        'custom-gray-100': '#D3DFE9',
        'app-faded': '#8C8D90',
      },
      fontSize: {
        '55px': '55px',
        '60px': '60px',
      },
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
        quicksand: ['Quicksand', 'Source Sans Pro', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      height: {
        'xl-modal-image': '350.212px',
        '2xl-modal-image': '408.212px',
      },
      margin: {
        '19px': '19px',
      },
      spacing: {
        '14/25': '56%',
      },
      inset: {
        '110px': '110px',
        '46px': '46px',
        '40px': '40px',
      },
      width: {
        'project-info-card': '35rem',
        'project-image': '40.25rem',
      },
      screens: {
        xxl: '1600px',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    height: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
  },
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
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
}

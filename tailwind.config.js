/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'clr-blue-light': '#35D5C5',
        'clr-blue-normal': '#449CE1',
        'clr-brown-light': '#E5C063',
        'clr-brown-dark': '#353439',
        'clr-green-normal': '#47C743',
        'clr-gray-light': '#F3EEEE',
        'clr-gray-normal': '#B3B3B3',
        'clr-gray-dark': '#707070',
      },
      fontFamily: {
        customUbu: ['test', 'gfdg'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

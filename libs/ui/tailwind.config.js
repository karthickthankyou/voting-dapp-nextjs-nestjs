const {
  keyframesConfig,
  animationConfig,
  colorsConfig,
  spacingConfig,
} = require('./tailwindConfig')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: colorsConfig,
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },

    extend: {
      ringColor: colorsConfig.primary.DEFAULT,
      ringOpacity: 20,
      outlineColor: colorsConfig.primary.DEFAULT,
      borderRadius: {
        DEFAULT: '8px',
      },
      spacing: spacingConfig,
      animation: animationConfig,
      keyframes: keyframesConfig,
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    theme: {
      screens: {
        xs: "360px",
        // => @media (min-width: 360px) { ... }

        sm: "720px",
        // => @media (min-width: 720px) { ... }

        md: "1024px",
        // => @media (min-width: 1024px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }

        xl: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
    colors: {
      black: '#212121',
      light: '#FFFFFF',
      background: {
        light: '#FFFFFF'
      },
      button: {
        filled: {
          borderColor: '#FFFFFF29'
        }
      }
    },

    extend: {},

  },
  plugins: []
}

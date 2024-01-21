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
      code: "#6657EC",
      black: "#212121",
      light: "#FFFFFF",
      background: {
        light: "#FFFFFF",
      },
      button: {
        filled: {
          borderColor: "#FFFFFF29",
        },
      },
      darkBlue: "#03020f",
      lightDarkBlue: "#0c073d",
      lightDarkRedAlpha03: "rgba(74,6,20,0.1)",
      lightDarkBlueAlpha03: "rgba(12,7,61,0.1)",
      redFromAngular: "#b20012",
    },

    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      backgroundColor: {
        website: "#03020f",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6657ec",

          secondary: "#374151",

          accent: "#db2777",

          neutral: "#f3f4f6",

          "base-100": "#f3f4f6",

          info: "#1d4ed8",

          success: "#10b981",

          warning: "#facc15",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

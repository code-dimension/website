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

    extend: {
      fontFamily: {
        inter: ["Inter"],
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
          "base-100": "#fff",
          info: "#1d4ed8",
          success: "#10b981",
          warning: "#facc15",
          error: "#f48f56",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

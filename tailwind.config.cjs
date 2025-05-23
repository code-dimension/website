/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
          error: "#e14545",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

const {
  themeVariants,
  prefersLight,
  prefersDark,
} = require("tailwindcss-theme-variants");
module.exports = {
  darkMode: "class",
 // lightMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 8s linear infinite",
        "bounce-slow": "bounce 6s linear infinite",
      },
    },
  },
  plugins: [
    themeVariants({
      themes: {
        light: {
          mediaQuery: prefersLight /* "@media (prefers-color-scheme: light)" */,
        },
        dark: {
          mediaQuery: prefersDark /* "@media (prefers-color-scheme: dark)" */,
        },
      },
    }),

    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};

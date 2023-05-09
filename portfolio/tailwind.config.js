module.exports = {
  darkMode: 'class',
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 8s linear infinite',
        'bounce-slow': 'bounce 6s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "translate-x": "translateX 1s ease-in"
      },
      keyframes: {
        translateX: {
          '0%': { transform: 'translateX(2.5rem)' },
          '100%': { transform: 'translateX(5rem)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

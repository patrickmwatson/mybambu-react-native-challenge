/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'mybambu-bg': '#000B4A',
        'mybambu-green': '#00DF82',
        'mybambu-green-light': '#E1FFEF',
        'mybambu-green-active': '#27FB6B',
        'mybambu-text-dark': '#0D1752',
        'mybambu-blue': '#296BFF',
        'mybambu-button': 'rgba(255, 255, 255, 0.5)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'mybambu-small': '10px',
        'mybambu-medium': '12px',
        'mybambu-large': '16px',
      },
      borderRadius: {
        'mybambu-small': '10px',
        'mybambu-medium': '15px',
        'mybambu-large': '20px',
        'mybambu-pill': '23px',
      },
    },
  },
  plugins: [],
}
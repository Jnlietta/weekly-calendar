/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#A5D6A7',  // Jaśniejszy zielony
          200: '#81C784',  // Jaśniejszy zielony
          800: '#388E3C',  // Ciemniejszy zielony
          900: '#1B5E20',  // Bardzo ciemny zielony
        },
        secondary: {
          100: '#81D4FA',  // Jaśniejszy błękit
          200: '#4FC3F7',  // Jaśniejszy błękit
          800: '#0288D1',  // Ciemniejszy błękit
          900: '#01579B',  // Bardzo ciemny błękit
        },
        accent: {
          100: '#FFCCBC',  // Jaśniejszy pomarańczowy
          200: '#FFAB91',  // Jaśniejszy pomarańczowy
          800: '#D32F2F',  // Ciemniejszy pomarańczowy
          900: '#C62828',  // Bardzo ciemny pomarańczowy
        },
        background: '#F5F5F5',  // Szary (tło)
        dark: '#2C2C2C',  // Ciemnoszary (tekst)
        highlight: '#FFD700',  // Złoty
        danger: '#F44336',  // Czerwony
      },
      fontFamily: {
        header: ['Poppins', 'sans-serif'],  // Nagłówki: Poppins
        heading: ['Montserrat', 'sans-serif'],  // Alternatywna czcionka dla nagłówków
        body: ['Inter', 'sans-serif'],  // Treść: Inter
        bodyLato: ['Lato', 'sans-serif'],  // Alternatywna czcionka dla treści
        button: ['Source Sans Pro', 'sans-serif'],  // Czcionka do przycisków
      },
    },
  },
  plugins: [],
}


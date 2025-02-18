/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        free: {
          100: '#E3F9E5',  // Lighter green
          500: '#38A169',  // Darker green
          800: '#22543D',  // Very dark green
        },
        booked: {
          100: '#E0F2FF',  // Lighter blue
          500: '#3182CE',  // Darker blue
          800: '#1C3D5D',  // Very dark blue
        },
        busy: {
          100: '#FDE8E8',  // Lighter red
          500: '#F87272',  // Darker red
          800: '#9B2C2C',  // Very dark red
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


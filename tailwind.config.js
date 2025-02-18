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
          500: '#4CAF50',  // Darker green
          800: '#2C6B2F',  // Very dark green
        },
        booked: {
          100: '#E0F2FF',  // Lighter blue
          500: '#3182CE',  // Darker blue
          800: '#3A5F82',  // Very dark blue
        },
        busy: {
          100: '#FDE8E8',  // Lighter red
          500: '#F87272',  // Darker red
          800: '#9B2C2C',  // Very dark red
        },
        background: '#F4F4F4',  // Gray (background)
        dark: '#2C2C2C',  // Dark gray (text)
        highlight: '#FFD700',  // Gold
        danger: '#F44336',  // Red
      },
      fontFamily: {
        header: ['Poppins', 'sans-serif'],  // Headers: Poppins
        heading: ['Montserrat', 'sans-serif'],  // Alternative font for headings
        body: ['Inter', 'sans-serif'],  // Body text: Inter
        bodyLato: ['Lato', 'sans-serif'],  // Alternative font for body text
        button: ['Source Sans Pro', 'sans-serif'],  // Font for buttons
      },
    },
  },
  plugins: [],
}


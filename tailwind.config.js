/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#F7F7F7",
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1123px",
          xl: "1125px",
          "2xl": "1124px",
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"], // Enable text color on hover
    },
  },
  plugins: [],
};

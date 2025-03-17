/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DD5313',
          200: '#DD531333',
        },
        facebook: '#415A93',
        gray: {
          light: "#A9ABAD",
          DEFAULT: "#8B8B8B",
        },
        dark: {
          deep: "#17202E",
          slate: "#273140",
          midnight: "#09091A",
          steel: "#243145",
          charcoal: "#232B39",
          navy: "#283140",
        },
        black: {
          200: "#00000033",
        },
        accent: {
          red: "#FF001F",
          blue: "#0038FF",
          cyan: "#15E8C4",
          green: {
            DEFAULT: "#8AD74E",
            200: "#8AD74E33",
          },
          jade: "#006350",
          cyan: "15E8C4",
          royal: "#0038FF",
        }
      }
    },
  },
  plugins: [],
}


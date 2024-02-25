/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],

  theme: {
    // TODO : adding customize fontfamily
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#AF8AE2",
          light: "#CFBBEA",
          dark: "#3B2D4C",
          subtle: "#F1EAFF",
        },
        error: {
          DEFAULT: "#FF3B3B",
          light: "#FF5C5C",
          dark: "#E53535",
          subtle: "#FF8080",
        },
        warning: {
          DEFAULT: "#FFCC00",
          light: "#E5B800",
          dark: "#FDDD48",
          subtle: "#FDED72",
        },
        success: {
          DEFAULT: "#06C270",
          light: "#39D98A",
          dark: "#05A660",
          subtle: "#57EBA1",
        },
        info: {
          DEFAULT: "#0063F7",
          light: "#5B8DEF",
          dark: "#004FC4",
          subtle: "#9DBFF9",
        },
        background: {
          primary: "#AF8AE2",
          primary_subtle: "#C7C9D9",
          white: "#FFFFFF",
        },
        boxShadow: {
          homepageItemBox: '0 2px 8px 0px rgba(99, 99, 99, 0.2)',
        },
        main: "#fafafc",
        dark: "#333333",
        grey: "#BDBDBD",
        dark_primary: "#3B2D4C",
      },
      padding: {
        "16px": "16px",
        "20px": "20px",
        "24px": "24px",
        "32px": "32px",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
      },
    },
  },
  plugins: [],
};

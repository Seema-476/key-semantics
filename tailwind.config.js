/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1240px",
        }
      },
      fontSize: {
        'custom-base': "10px",
        'custom-xl': "32px",
        'custom-2xl': "64px",
      },
      lineHeight: {
        'custom-base': "14px",
        'custom-xl': "19.5px",
        'custom-2xl': "60px",
        'custom-3xl': "67px",
        'custom-4xl': "72px",
      },
      colors: {
        'deep-blue': "#191a42",
        'dark-blue': "#111235",
        'off-white': "#f7f9fb",
        'gray': "#c9cad4",
        'aqua-light': "#ecf2f8",
        'ice-blue': "#e3f7fa",
        'pitch': "#fce7ef",
        'z-black': "#24254b",
        'sky-blue': "#48c3d7",
        'purple': "#7c7db9",
        'light-purple': "#7c7eb9",
        'levender': "#ece8f8",
      },
      boxShadow: {
        'custom-xl': "0px 10px 40px 0px #41566B0D",
      },
      backgroundImage: {
        'hero-bg': "url('/public/assets/images/webp/hero-bg.webp')",
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}


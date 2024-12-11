/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#081A51",
        "white": "#F1F5F9",
        "primary": "#144EE3",
        "light-gray": "#A8AEB9",
        "dark-gray": "#363E4B",
        "light": "#F5F7F8",
        "light-white": "rgba(255,255,255,0.17)",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
};

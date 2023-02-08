/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        chat: "0 0 2rem rgba(0,0,0, 0.075), 0 1rem 1rem -1rem rgba(0,0,0, 0.1)",
      },
      borderRadius: {
        "chat-right": "1.125rem 1.125rem 0 1.125rem",
        "chat-left": "1.125rem 1.125rem 1.125rem 0",
      },
    },
  },
  plugins: [],
};

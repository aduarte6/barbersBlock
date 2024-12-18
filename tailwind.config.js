/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'orangeGradient': "linear-gradient(58deg,rgba(200,56,3,1),rgba(200,56,3,0.61)82.35%)",
        'navyGradient': "linear-gradient(to right, rgb(11, 22, 42) 23.95%, rgba(60, 82, 122, 0.73))"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'links-900': "rgba(17, 32, 60, 1)",
        'chicagoOrange': "#C83803"

      },
    },
  },
  plugins: [],
};

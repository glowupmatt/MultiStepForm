/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    colors: {
      blue: {
        marine: "hsl(213, 96%, 18%)",
        light: "hsl(206, 94%, 87%)",
        pastel: "hsl(228, 100%, 84%)",
        purple: "hsl(243, 100%, 62%)",
      },
      red: {
        strawberry: "hsl(354, 84%, 57%)",
      },
      gray: {
        cool: "hsl(231, 11%, 63%)",
        light: "hsl(229, 24%, 87%)",
      },
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(217, 100%, 97%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

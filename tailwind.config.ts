import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(100vh) scale(0.5)', opacity: '2' },  

          '100%': { transform: 'translateY(-418vh) scale(1)', opacity: '2' },  // End above the viewport, fully visible
        }
      },
      animation: {
        float: 'float 13s infinite linear',  // Adjust the duration as needed
      }
    },
  },
  plugins: [],
};

export default config;
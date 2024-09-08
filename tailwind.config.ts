import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0e0f0f",
        light: "#2a2b2c",
        lighter: "#6d6f6d",
        green: "#649b89",
        cream: "#f2f1f1",
      },
      screens: {
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;

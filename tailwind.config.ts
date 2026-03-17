import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slateBrand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          700: "#334155",
          900: "#0f172a"
        }
      },
      boxShadow: {
        card: "0 10px 30px -18px rgba(15,23,42,0.35)"
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "fc-color": {
          50: "#69B7BF",
          70: "#495057",
          80: "#DEE2E6",
          90: "#F5F8FA",
          100: "#106E41",
          200: "#6AD972",
          300: "#E56725",
          400: "#F2F2F2",
          500: "#D9D9D9",
          600: "#F5F8FA",
          700: "#FFFFFF",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-blue": '#0f172a',
        "light-yellow": '#ffeb3b',
        "mint-green": '#37d67a',
        "vine-tinte" : '#3b8bbe',
        "light-blue": '#15384e',
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
export default config;

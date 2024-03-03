import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)"],
        quicksand: ["var(--font-quicksand)"],
      },
      backgroundImage: {
        "home-page": `linear-gradient(180deg, #0f172a44 0%, #0f172a88 80%, #0f172a 95%, #0f172a 100%), url(/images/bg.jpg)`,
        gradient:
          "linear-gradient(360deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 0.75) 50%, hsla(207, 41%, 27%, 0.5) 100%)",
      },
      colors: {
        primary: "#ffb199",
        secondary: "#0f172a",
      },
    },
  },
  plugins: [],
};
export default config;

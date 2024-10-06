import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: [
        "0.75rem",
        {
          lineHeight: "125%",
          letterSpacing: "-0.03125rem",
        },
      ],
      xl: [
        "0.875rem",
        {
          lineHeight: "125%",
          letterSpacing: "-0.03125rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "125%",
          letterSpacing: "-0.03125rem",
        },
      ],
      "3xl": [
        "2.5rem",
        {
          lineHeight: "125%",
          letterSpacing: "-0.03125rem",
        },
      ],
    },
    extend: {
      screens: {
        md: "960px",
        lg: "1440px",
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
      },
      colors: {
        stroke: "rgba(0, 0, 0, 0.1)",
        "off-white": "#fafafa",
        green: "#00703a",
      },
      fontFamily: {
        sans: ["var(--font-sf-pro)"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#fff7f0",
          100: "#ffeee1",
          400: "#ff8a00",
          500: "#ff6a00",
          600: "#e55c00",
        },
        ink: "#0b0b0c",
        muted: "#6e6e72",
        cream: "#f3f0ea",
      },
      fontFamily: {
        sans: ['"DM Sans"', "Arial", "sans-serif"],
        display: ['"Barlow Condensed"', "Impact", "sans-serif"],
      },
      textColor: {
        ink: "#0b0b0c",
        muted: "#6e6e72",
      },
      backgroundColor: {
        ink: "#0b0b0c",
        cream: "#f3f0ea",
      },
      borderColor: {
        ink: "#0b0b0c",
        muted: "#6e6e72",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          "50": "#fff7f0",
          "100": "#ffeee1",
          "400": "#ff8a00",
          "500": "#ff6a00",
          "600": "#e55c00",
        },
        ink: "#0b0b0c",
        muted: "#6e6e72",
        cream: "#f3f0ea",
        "ink-light": "#f3f0ea",
      },
      spacing: {
        "2.5": "10px",
        "4.5": "18px",
        "6.5": "26px",
        "7.5": "30px",
        "8.5": "34px",
        "9.25": "37px",
        "10.5": "42px",
        "13": "52px",
        "17.5": "70px",
        "21": "84px",
        "24.5": "98px",
        "27.5": "110px",
        "30": "120px",
        "31.25": "125px",
        "32.5": "130px",
        "33": "132px",
        "34": "136px",
      },
      fontSize: {
        "2xs": "10px",
        "3xs": "9px",
      },
      fontFamily: {
        sans: ['"DM Sans"', "Arial", "sans-serif"],
        display: ['"Barlow Condensed"', "Impact", "sans-serif"],
      },
      letterSpacing: {
        "wider": "0.13em",
        "widest": "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;

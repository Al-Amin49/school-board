import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        skyBlue: "#88E1F2",          // Bright sky blue
        skyBlueLight: "#DAF7FE",     // Light sky blue
        royalPurple: "#A78BFA",      // Soft royal purple
        lavender: "#EAE4FF",         // Light lavender
        goldenYellow: "#FFD700",     // Rich golden yellow
        paleYellow: "#FFF9E5",       // Pale yellow
      },
      
    },
  },
  plugins: [],
};
export default config;

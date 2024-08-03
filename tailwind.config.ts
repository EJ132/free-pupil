import type { Config } from "tailwindcss";

const config: Config = {
  // Enable dark mode using the class strategy
  darkMode: "class",

  // Combine the content from both configs
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],

  // Use the presets from the second config
  presets: [require("@relume_io/relume-tailwind")],

  // Specify plugins, including those from both configs
  plugins: [require("tailwindcss-animate")],

  // Define the theme by combining settings from both configs
  theme: {
    // Extend theme with colors, fontFamily, and animations from both configs
    extend: {
      // Color and fontFamily settings from the second config
      colors: {
        primary: {
          DEFAULT: "#D84543",
        },
        secondary: {
          DEFAULT: "#AAA",
        },
        tertiary: {
          DEFAULT: "#FFF",
        },
        gold: {
          DEFAULT: "#FFC107",
        },
      },
      fontFamily: {
        familijenGrotesk: ["Familjen Grotesk", "sans-serif"],
      },

      // Animation keyframes and properties from the first config
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};

export default config;

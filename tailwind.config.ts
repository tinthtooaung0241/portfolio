import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "#1E3163",
        blue: "#2D46B9",
        lightGray: "#D1D5DB",
        softBlue: "#93C5FD",
        offWhite: "#F8F8F8",
        iceBlue: "#F1F6F9",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "school-safety": ["var(--font-school_safety_chalkboard_eraser)"],
        "eraser-dust": ["var(--font-eraser-dust)"],
        "child-fund": ["var(--font-child-fund-korea-min-guk)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

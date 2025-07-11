/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1A56DB",
        "accent-green": "#22C55E",
        "neutral-bg": "#F9FAFB",
        "card-bg": "#FFFFFF",
        border: "#E5E7EB",
        "text-main": {
          DEFAULT: "#111827",
          dark: "#e5e7eb",
        },
        "text-secondary": {
          DEFAULT: "#1F2937",
          dark: "#a1a1aa",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1.25rem",
        full: "9999px",
      },
      boxShadow: {
        eleven: "0 4px 24px rgba(0,0,0,0.08)",
        card: "0 1.5px 8px 0 rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryContent: "var(--color-primary-content)",
        secondary: "var(--color-secondary)",
        neutral: "var(--color-neutral)",
        background: "var(--color-base-100)",
        baseContent: "var(--color-base-content)",
      },
    },
  },
  plugins: [],
};

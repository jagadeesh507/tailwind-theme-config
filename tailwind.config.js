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
        buttons: "var(--color-buttons)",
        typography: "var(--color-typography)",
        rounded: "var(--rounded-box)",
        background: "var(--color-base-100)",
        baseContent: "var(--color-base-content)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#0B0C0E",
          900: "#111315",
          800: "#17191C",
          700: "#24272B",
        },
        paper: {
          50: "#F5F4F1",
          100: "#FFFFFF",
          200: "#E4E2DC",
        },
        brand: {
          light: "#1E9E5A",
          dark: "#7FE3A6",
        },
        sand: {
          light: "#946E3D",
          dark: "#E8C089",
        },
      },
    },
  },
  plugins: [],
};

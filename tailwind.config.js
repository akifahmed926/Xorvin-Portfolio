/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        background: "var(--color-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
          secondary: "var(--color-surface-secondary)",
        },
        'text-primary': "var(--color-text-primary)",
        'text-muted': "var(--color-text-muted)",
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-accent-hover)",
        },
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        border: {
          subtle: "var(--color-border-subtle)",
          glow: "var(--color-border-glow)",
        },
        brand: {
          void: "#05070D",
          graphite: "#151515",
          arctic: "#D4DBE6",
          steel: "#8E99A8",
          electric: "#0E3B7F",
          ice: "#8FD8FF",
        }
      },
      backgroundImage: {
        'gradient-primary': "var(--gradient-primary)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glow-electric': "var(--glow-electric)",
        'glow-ice': "var(--glow-ice)",
        'glow-subtle': "var(--glow-subtle)",
        'glow-text': "var(--glow-text)",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
};

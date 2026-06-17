/** @type {import('tailwindcss').Config} */
// Gesundheitspraxis SonnenTor — Palette aus Logo-Pixel-Analyse (sharp):
//   Korall-Rot #DC4A3E (~79 % der Logofläche, weißes Kreuz) → Marken-Signatur (clay)
//   Bernstein  #E9A23C (Sonnenaufgang, „SonnenTor")          → zweite Wärme (amber)
//   Salbei     #7F9A6F (Natur / Stechlinsee)                 → ruhiger Dritter (sage)
//   Espresso   #241C18                                       → Dark-Section (CtaBand/Footer/Video)
// Light-Fundament ~80 %, warm & natürlich. Single Source of Truth der Farbwerte:
// src/styles/global.css :root (RGB-Triplets).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--rgb-ink) / <alpha-value>)',
          soft: 'rgb(var(--rgb-ink-soft) / <alpha-value>)',
        },
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        paper: 'rgb(var(--rgb-paper) / <alpha-value>)',
        sand: 'rgb(var(--rgb-sand) / <alpha-value>)',
        mist: 'rgb(var(--rgb-mist) / <alpha-value>)',
        line: 'rgb(var(--rgb-border) / <alpha-value>)',
        clay: {
          DEFAULT: 'rgb(var(--rgb-clay) / <alpha-value>)',
          deep: 'rgb(var(--rgb-clay-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-clay-ink) / <alpha-value>)',
          tint: 'rgb(var(--rgb-clay-tint) / <alpha-value>)',
        },
        amber: {
          DEFAULT: 'rgb(var(--rgb-amber) / <alpha-value>)',
          deep: 'rgb(var(--rgb-amber-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-amber-ink) / <alpha-value>)',
          tint: 'rgb(var(--rgb-amber-tint) / <alpha-value>)',
        },
        sage: {
          DEFAULT: 'rgb(var(--rgb-sage) / <alpha-value>)',
          deep: 'rgb(var(--rgb-sage-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-sage-ink) / <alpha-value>)',
          tint: 'rgb(var(--rgb-sage-tint) / <alpha-value>)',
        },
        dark: {
          DEFAULT: 'rgb(var(--rgb-dark) / <alpha-value>)',
          deep: 'rgb(var(--rgb-dark-deep) / <alpha-value>)',
          soft: 'rgb(var(--rgb-dark-soft) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'Cambria', 'serif'],
      },
      borderRadius: { pill: '999px', '2xl': '1.125rem', '3xl': '1.5rem' },
      maxWidth: { '7xl': '80rem', '8xl': '88rem' },
      boxShadow: {
        soft: '0 1px 2px rgb(42 35 32 / 0.04), 0 8px 24px -12px rgb(42 35 32 / 0.12)',
        lift: '0 2px 4px rgb(42 35 32 / 0.05), 0 24px 48px -20px rgb(42 35 32 / 0.20)',
      },
      letterSpacing: { tightish: '-0.015em' },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
      animation: { ripple: 'ripple 2.8s ease-out infinite', 'pulse-dot': 'pulseDot 2s ease-in-out infinite' },
    },
  },
  plugins: [],
};

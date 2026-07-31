import type { Config } from 'tailwindcss';

/**
 * Colors resolve from CSS custom properties so a single class works in both
 * themes. Values are stored as space-separated RGB channels, which is what
 * lets Tailwind's `<alpha-value>` opacity modifiers keep working.
 * The palettes live in src/style.css.
 */
const token = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  darkMode: ['class', '.trs80'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        prose: ['var(--font-prose)', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        // Surfaces
        ground: token('ground'),
        rail: token('rail'),
        card: token('card'),
        hover: token('hover'),
        active: token('active'),
        line: token('line'),

        // Text, brightest to dimmest
        ink: token('ink'),
        body: token('body'),
        muted: token('muted'),
        faint: token('faint'),
        ghost: token('ghost'),

        // Accent and status
        accent: {
          DEFAULT: token('accent'),
          soft: token('accent-soft'),
        },
        live: token('live'),
        warn: token('warn'),

        // Tag chips
        tag: {
          bg: token('tag-bg'),
          line: token('tag-line'),
          ink: token('tag-ink'),
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
} satisfies Config;

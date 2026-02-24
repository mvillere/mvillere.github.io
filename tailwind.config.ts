import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        shell: {
          bg: '#0b0b0e',
          sidebar: '#0f0f14',
          card: '#111116',
          hover: '#16161e',
          active: '#1a1a26',
          border: '#1e1e2c',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

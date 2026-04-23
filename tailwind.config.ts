// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Enforced Dark Theme Palette
        'bg-primary': '#0A0A0F',
        'bg-secondary': '#111118',
        'bg-tertiary': '#1A1A24',
        'bg-card': '#13131A',
        'bg-hover': '#1E1E2E',
        'border-subtle': '#1E1E2E',
        'border-default': '#2A2A3E',
        'border-strong': '#3A3A5C',
        'text-primary': '#F1F0FF',
        'text-secondary': '#A09DB8',
        'text-muted': '#6B6880',
        'text-disabled': '#3D3A50',
        'accent-violet': '#7C3AED',
        'accent-violet-hover': '#8B5CF6',
        'accent-cyan': '#06B6D4',
        'accent-cyan-hover': '#22D3EE',
        'accent-green': '#10B981',
        'accent-amber': '#F59E0B',
        'accent-red': '#EF4444',
        
        // Backward compatibility for components using primary/secondary
        'primary': '#7C3AED',
        'secondary': '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(124, 58, 237, 0.25)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.25)',
      }
    },
  },
  plugins: [],
} satisfies Config;

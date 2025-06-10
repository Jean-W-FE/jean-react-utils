import type { Config } from 'tailwindcss'

export const baseColors = {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },
  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },
}

export const baseAnimations = {
  'fade-up': {
    "0%": {
      opacity: "0",
      transform: "translateY(20px)"
    },
    "80%": {
      opacity: ".7",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)"
    }
  },
  'fade-down': {
    "0%": {
      opacity: "1",
      transform: "translateY(0)"
    },
    "80%": {
      opacity: ".7",
    },
    "100%": {
      opacity: "0",
      transform: "translateY(20px)"
    }
  },
  'fade-in': {
    "0%": {
      opacity: "0",
    },
    '50%': {
      opacity: "0.6",
    },
    "100%": {
      opacity: "1",
    }
  },
  'fade-out': {
    "0%": {
      opacity: "1",
    },
    '50%': {
      opacity: "0.6",
    },
    "100%": {
      opacity: "0",
    }
  },
}

export const baseConfig: Partial<Config> = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: baseColors,
      keyframes: baseAnimations,
      animation: {
        'fade-up': 'fade-up 0.3s ease-out',
        'fade-down': 'fade-down 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
} 
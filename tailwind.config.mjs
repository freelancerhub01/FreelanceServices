/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#1e1b4b',
        },
        neon: {
          purple: '#a855f7',
          blue:   '#3b82f6',
          cyan:   '#06b6d4',
          pink:   '#ec4899',
          green:  '#10b981',
        },
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-slow':     'float 9s ease-in-out infinite',
        'float-fast':     'float 4s ease-in-out infinite',
        'glow':           'glow 3s ease-in-out infinite alternate',
        'glow-pulse':     'glowPulse 2s ease-in-out infinite',
        'slide-up':       'slideUp 0.6s ease forwards',
        'slide-right':    'slideRight 0.6s ease forwards',
        'fade-scale':     'fadeScale 0.5s ease forwards',
        'spin-slow':      'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'border-glow':    'borderGlow 3s ease-in-out infinite',
        'typewriter':     'typewriter 3s steps(40) forwards',
        'blink':          'blink 1s step-end infinite',
        'shimmer':        'shimmer 2.5s linear infinite',
        'bounce-slow':    'bounce 3s infinite',
        'ping-slow':      'ping 3s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(99,102,241,0.8), 0 0 100px rgba(168,85,247,0.4)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        fadeScale: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(99,102,241,0.3)' },
          '50%':      { borderColor: 'rgba(168,85,247,0.8)' },
        },
        typewriter: {
          from: { width: '0' },
          to:   { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%':      { borderColor: '#6366f1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.2)',
        'neon-blue':   '0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.2)',
        'neon-cyan':   '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.2)',
        'neon-brand':  '0 0 30px rgba(99,102,241,0.6), 0 0 60px rgba(99,102,241,0.3)',
        'card-hover':  '0 20px 60px rgba(99,102,241,0.2), 0 0 0 1px rgba(99,102,241,0.3)',
        'glow-sm':     '0 0 10px rgba(99,102,241,0.4)',
      },
    },
  },
  plugins: [],
};

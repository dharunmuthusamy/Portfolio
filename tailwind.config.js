/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          main: 'var(--bg-main)',
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        txt: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          subtle: 'var(--border-color)',
        },
        emerald: {
          main: 'var(--emerald-primary)',
          hover: 'var(--emerald-hover)',
          soft: 'var(--emerald-soft)',
          accent: 'var(--emerald-accent)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '1140px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px 0 rgba(0,0,0,0.04)',
        'card': '0 2px 8px 0 rgba(0,0,0,0.06)',
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}

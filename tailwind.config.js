/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Lexend', 'Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#eef4ff',
                    100: '#dae6ff',
                    200: '#bdd4ff',
                    300: '#90b8ff',
                    400: '#5c91fc',
                    500: '#3b6ff8',
                    600: '#2451ed',
                    700: '#1c3eda',
                    800: '#1d34b0',
                    900: '#1e318b',
                    950: '#172055',
                },
                surface: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    700: '#1e293b',
                    800: '#111827',
                    850: '#0f172a',
                    900: '#0b1120',
                    950: '#060a14',
                },
            },
            boxShadow: {
                'soft': '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
                'card': '0 2px 8px -2px rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
                'lift': '0 8px 24px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)',
                'overlay': '0 16px 48px -8px rgba(0,0,0,0.12), 0 4px 12px -4px rgba(0,0,0,0.06)',
                'glow-brand': '0 0 20px -3px rgba(36,81,237,0.25)',
                'glow-emerald': '0 0 20px -3px rgba(16,185,129,0.25)',
                'glow-amber': '0 0 20px -3px rgba(245,158,11,0.25)',
                'dark-card': '0 2px 8px -2px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03)',
                'dark-lift': '0 8px 24px -4px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
            },
            borderRadius: {
                'card': '1rem',
                'card-lg': '1.25rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #1c3eda 0%, #2451ed 40%, #5c91fc 100%)',
                'hero-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #172055 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.4s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
                'scale-in': 'scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'progress-fill': 'progressFill 1.5s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-right': 'slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'reveal-up': 'revealUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pop': 'popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
                'correct-flash': 'correctFlash 0.5s ease-out forwards',
                'shake': 'shake 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(8px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'scale(0.97)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
                progressFill: {
                    from: { transform: 'scaleX(0)' },
                    to: { transform: 'scaleX(1)' },
                },
                slideInLeft: {
                    from: { opacity: '0', transform: 'translateX(-16px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    from: { opacity: '0', transform: 'translateX(16px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                revealUp: {
                    from: { opacity: '0', transform: 'translateY(16px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                popIn: {
                    from: { opacity: '0', transform: 'scale(0.9)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                correctFlash: {
                    from: { backgroundColor: 'rgb(209 250 229)' },
                    to: { backgroundColor: 'transparent' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '20%': { transform: 'translateX(-4px)' },
                    '40%': { transform: 'translateX(4px)' },
                    '60%': { transform: 'translateX(-3px)' },
                    '80%': { transform: 'translateX(3px)' },
                },
            },
        },
    },
    plugins: [],
}

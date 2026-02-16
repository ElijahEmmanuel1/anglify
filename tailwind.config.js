/** @type {import('tailwindcss').Config} */
export default {
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
            },
            boxShadow: {
                'soft': '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.03)',
                'card': '0 2px 8px -2px rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
                'lift': '0 8px 24px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)',
                'overlay': '0 16px 48px -8px rgba(0,0,0,0.12), 0 4px 12px -4px rgba(0,0,0,0.06)',
            },
            borderRadius: {
                'card': '1rem',
                'card-lg': '1.25rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.4s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
                'scale-in': 'scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'progress-fill': 'progressFill 1.5s ease-out forwards',
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
            },
        },
    },
    plugins: [],
}

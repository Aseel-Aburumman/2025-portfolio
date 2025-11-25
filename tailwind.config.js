/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            colors: {
                void: '#0a0a0a',
                concrete: '#1a1a1a',
                paper: '#ededed',
                graphite: '#888888',
                blueprint: '#3b82f6',
            },
        },
    },
    plugins: [],
}

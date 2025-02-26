/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'nav-black': '#111111', // You can adjust this to match the exact black from the website
            },
            maxWidth: {
                '7xl': '1280px',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};

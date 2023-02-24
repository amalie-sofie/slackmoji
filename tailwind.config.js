/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        colors: {
            cream: {
                DEFAULT: '#F7F4F0' // "Chalice"
            },
            darkgrey: {
                DEFAULT: '#24282D' // "Anthracite"
            },
            blue: {
                DEFAULT: '#0064AA' // "Sapphire Blue"
            },
            green: {
                DEFAULT: '#2EE57C' // "Nite Elf"
            },
            orange: {
                DEFAULT: '#F77F00' // "Tangerine"
            },
            yellow: {
                DEFAULT: '#F7CA16' // "Jonquil"
            },
            red: {
                DEFAULT: '#DC1C24' // "Maximum Red"
            },
            white: '#FFFFFF',
            black: '#000000'
        },

        fontFamily: {
            // text: ['', 'sans-serif'],
            // sans: ['Netlife Regular', 'sans-serif'],
            sans: ['Netlife Regular', 'sans-serif'],
            "line": ['Netlife Lining', 'sans-serif'],
        },
        
        fontSize: {
            DEFAULT: 'clamp(1rem, 2vw, 2rem)',
            "xs": 'clamp(1rem, 1.3vw, 1.4rem)',
            sm: 'clamp(1.2rem, 1.6vw, 1.8rem)',
            md: 'clamp(1.5rem, 2.6vw, 2.8rem)',
            lg: 'clamp(1.9rem, 3.9vw, 4.2rem)',
            xl: 'clamp(2.3rem, 5.2vw, 5.6rem)'
        },
        extend: {
            borderWidth: {
                3: '3px'
            },
            screens: {
                xs: '320px',
                '3xl': '1920px',
                '4xl': '2200px'
            },
            spacing: {
                5 : '5vw',
                4 : '5vh',
            }
        }
    },
    plugins: []
}
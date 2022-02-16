const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        colors: {
            blue: 'hsl(220, 98%, 61%)',
            cyan: 'hsl(192, 100%, 67%)',
            pink: 'hsl(280, 87%, 65%)',
            white: 'hsl(0, 0%, 100%)',
            light: {
                foreground: 'hsl(0, 0%, 100%)',
                background: 'hsl(0, 0%, 98%)',
                textPrimary: 'hsl(235, 19%, 35%)',
                textSecondary: 'hsl(236, 9%, 61%)',
                todoList: 'hsl(233, 11%, 84%)',
            },
            dark: {
                foreground: 'hsl(235, 24%, 19%)',
                background: 'hsl(235, 21%, 11%)',
                textPrimary: 'hsl(234, 39%, 85%)',
                textSecondary: 'hsl(234, 11%, 52%)',
                todoList: 'hsl(237, 14%, 26%)',
            },
        },
        extend: {
            fontFamily: {
                sans: [
                    'Josefin Sans',
                    ...defaultTheme.fontFamily.sans,
                ]
            },
            backgroundImage: {
                'mobile-dark-bg': "url('/src/assets/images/bg-mobile-dark.jpg')",
                'mobile-light-bg': "url('/src/assets/images/bg-mobile-light.jpg')",
                'desktop-dark-bg': "url('/src/assets/images/bg-desktop-dark.jpg')",
                'desktop-light-bg': "url('/src/assets/images/bg-desktop-light.jpg')"
            },
            spacing: {
                'desktopTodo': '45rem',
            }
        },
    },
    plugins: [],
}

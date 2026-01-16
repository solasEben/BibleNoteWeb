/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                surface: "var(--surface)",
                warm: "var(--warm)",
                border: "var(--border)",
                primary: {
                    DEFAULT: "#8878FF",
                    indigo: "#3A3F58",
                    aqua: "#C7F0E9",
                    pink: "#F7DDE2",
                },
                accent: {
                    blue: "#6EC3F5",
                    gold: "#F9D47A",
                    mint: "#D4F7E7",
                    coral: "#FFB7A5",
                },
                status: {
                    success: "#10B981",
                    info: "#5B4DFF",
                    warning: "#F59E0B",
                },
                muted: {
                    DEFAULT: "var(--text-muted)",
                },
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

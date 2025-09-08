/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          light: "var(--primary-light)",
          gray: "var(--primary-gray)",
        },

        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
          background: "var(--success-background)",
          border: "var(--success-border)",
        },

        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
          background: "var(--warning-background)",
          border: "var(--warning-border)",
        },
        
        error: {
          DEFAULT: "var(--error)",
          foreground: "var(--error-foreground)",
          background: "var(--error-background)",
          border: "var(--error-border)",
        },
  
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      }
    },
  },
  plugins: [],
};

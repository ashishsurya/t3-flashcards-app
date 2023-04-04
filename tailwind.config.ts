import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
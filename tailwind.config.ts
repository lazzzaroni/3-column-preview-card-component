import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      colors: {
        primary: {
          "bright-orange": "hsl(31, 77%, 52%)",
          "dark-cyan": "hsl(184, 100%, 22%)",
          "very-dark-cyan": "hsl(179, 100%, 13%)",
        },
        neutral: {
          "transparent-white": "hsla(0, 0%, 100%, 0.75)",
          "very-light-grey": "hsl(0, 0%, 95%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

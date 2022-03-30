module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mon: ["Montserrat", "sans-serif"],
    },
    fontWeight: {
      medium: 500,
      semibold: 600,
      extrabold: 800,
    },
    screen: {
      sm: "640px",
      // @media (min-width: 640px)  {....}

      md: "768px",
      // @media (min-width: 768px)  {....}

      lg: "1024px",
      // @media (min-width: 1024px)  {....}

      xl: "1280px",
      // @media (min-width: 1280px)  {....}

      "2xl": "1546px",
      // @media (min-width: 1546px)  {....}
    },
    extend: {
      color: {
        primaryblue: "#1E82C5",
        secondaryblue: "#4a68b1",
        normaltext: "#FFFFFF",
        darkred: "#570E0E",
        lightred: "#B22425",
        normalblack: "##171717",
      },
    },
  },
  plugins: [],
};

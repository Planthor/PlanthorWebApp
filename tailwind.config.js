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
      colors: {
        'primary-blue': "#1E82C5",
        'secondary-blue': "#4a68b1",
        'normal-text': "#FFFFFF",
        'dark-red': "#570E0E",
        'light-red': "#B22425",
        'normal-black': "#171717",
      },
      backgroundImage: {
        'bg-introduction': 'url("./assets/planthor-hompage-imgs/background.png")',
        'bg-login':'url("./assets/login-imgs/bgLogin.png")'
      },
      height:{
        'h-origin': '89vh',
      }
    },
  },
  plugins: [],
};

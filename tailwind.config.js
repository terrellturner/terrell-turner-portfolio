/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      "dark-green": "#027333",
      "light-green": "#16F275",
      "dim-green": "#12A652",
      "off-white": "#F2F2F2",
      "dark-grey": "#262626",
      "steel-black": "#0c0e12",
    },
    gridTemplateRows: {
      "1fr-auto": "auto 1fr",
      "auto-1fr": "1fr auto",
      2: "repeat(2, minmax(0, auto));",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 3s ease 0s 1 normal forwards",
        slideIn: "slideIn .5s ease 0s 1 normal forwards",
        slideOut: "slideOut .5s ease 0s 1 normal forwards",
        techScrollMobile: "techScrollMobile linear",
        techScrollDesktop: "techScrollDesktop linear",
        skillScrollMobile: "skillScrollMobile linear",
        skillScrollDesktop: "skillScrollDesktop linear",
      },
      backgroundImage: {
        "contact-bg": "url('./imgs/contact-bg.webp')",
        minneapolis: "url('./imgs/minneapolis.webp')",
        dice: "url('./imgs/dice.webp')",
        "chicken-tikka": "url('./imgs/chicken-tikka.webp')",
        cake: "url('./imgs/cake.webp')",
        "3dart": "url('./imgs/delorean.webp')",
        "spinning-top": "url('./imgs/spinning-top.webp')",
        "its-a-me": "url('./imgs/minneapolis.webp')",
        "black-excellence-daily": "url('./imgs/bid.webp')",
        portfolio: "url('./imgs/portfolio.webp')",
        "light-news": "url('./imgs/lightnews.webp')",
      },
      boxShadow: { avatar: "0px 0px 0px 5px #16F275" },
      dropShadow: {
        "title-effect-desktop": "0 -20px 0px #027333",
        "title-effect": "0 -20px 0px #16F275",
        "title-effect-dark-mode": "0 -20px 0px #027333",
      },
      fontFamily: { roboto: ['"Roboto"'] },
      height: { "screen-2xl": "200vh", "about-cards": "26rem" },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(500px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(500px)" },
        },
        techScrollMobile: {
          from: { transform: "translateX(-20rem)" },
          to: { transform: "translateX(10rem)" },
        },
        techScrollDesktop: {
          from: { transform: "translateY(-40rem) rotate(90deg)" },
          to: { transform: "translateY(10rem) rotate(90deg)" },
        },
        skillScrollMobile: {
          from: { transform: "translateX(-20rem)" },
          to: { transform: "translateX(50rem)" },
        },
        skillScrollDesktop: {
          from: { transform: "translateY(0) rotate(-90deg)" },
          to: { transform: "translateY(70rem) rotate(-90deg)" },
        },
      },
      margin: {
        128: "32rem",
      },
      maxWidth: {
        "screen-3xl": "1920px",
        "about-card": "12rem",
      },
      strokeWidth: {
        25: "25",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

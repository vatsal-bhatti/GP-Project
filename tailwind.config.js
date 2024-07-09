/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   boxShadow: {
    "custom-shadow": "0px 2px 15px 0px rgba(68, 68, 68, 0.1)",
   },
   backgroundImage: {
    "hero-image":
     "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://bootstrapmade.com/demo/templates/Gp/assets/img/hero-bg.jpg) ",
    "stats-image":
     "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/stats-bg.jpg')",
    "cta-image":
     "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://bootstrapmade.com/demo/templates/Gp/assets/img/cta-bg.jpg)",
    "staff-bground-image":
     "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials-bg.jpg)",
   },
  },
 },
 plugins: [],
};

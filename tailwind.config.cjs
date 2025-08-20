// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // escanea tus archivos Astro y JS
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Edu NSW ACT Hand Pre", "sans-serif"], // tu fuente personalizada
      },
    },
  },
  plugins: [],
};

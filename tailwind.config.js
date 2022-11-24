/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
//"./node_modules/flowbite/**/*.js",

  ],
  theme: {
      screens: {
          'phone':"411px"
      },
    extend: {},
  },
  plugins: [
      require("daisyui"),
//require('flowbite')
],
}
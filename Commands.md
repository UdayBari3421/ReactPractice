<!-- vite app creation -->

npm create vite@latest
npm i

<!-- Tailwind installation -->

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

<!-- css file injection -->

@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- config file -->

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

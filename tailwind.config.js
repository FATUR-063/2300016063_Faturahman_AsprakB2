/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Atur 'content' agar Tailwind tahu file mana yang harus dipindai
  content: [
    "./index.html", // Memindai file index.html
    "./src/**/*.{js,css}" // Memindai file .js dan .css di dalam folder src
  ],
  theme: {
    extend: {
      // 2. Daftarkan font Anda di sini
      fontFamily: {
        // 'font-sans' akan menjadi font 'Inter'
        sans: ['ketua'], 
        // 'font-mono' akan menjadi font 'Space Mono'
        mono: ['uhuk'],
      }
    },
  },
  plugins: [],
}
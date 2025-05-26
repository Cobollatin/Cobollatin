/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], // Scan all relevant files in src
  theme: {
    extend: {}, // For any theme customizations
  },
  plugins: [],
  prefix: 'tw-', // Add a prefix to avoid conflicts with Carbon
};

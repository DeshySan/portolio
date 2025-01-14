/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo
        secondary: "#F97316", // Orange
        accent: "#10B981", // Green
        neutral: "#6B7280", // Gray
        background: "#F9FAFB", // Light Gray Background
        success: "#22C55E", // Green Success
        danger: "#EF4444", // Red Danger
        warning: "#F59E0B", // Yellow Warning
        info: "#3B82F6", // Blue Info
        light: "#F3F4F6", // Light Gray
        dark: "#111827", // Dark Gray
        midnight: "#1E2A47",
        pink: "rgba(255, 255, 255, 0.6) ",
      },
    },
  },
  plugins: [],
};

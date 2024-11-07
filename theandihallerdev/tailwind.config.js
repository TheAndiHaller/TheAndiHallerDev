/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust the path based on your project structure
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#D1D0C5", // Custom teal color
            // Customize heading styles
            strong: { color: "inherit" },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
            h5: {
              color: "inherit",
            },
            h6: {
              color: "inherit",
            },
            p: {
              color: "inherit",
            },
            a: {
              textDecoration: "none", // Remove underline
              color: "#facc15", // Darker blue on hover
              "&:hover": {
                color: "#facc15", // Darker blue on hover
              },
            },
            "ul > li::marker": {
              color: "inherit", // Custom bullet color for unordered lists
            },
            code: {
              backgroundColor: "#F3F4F6", // Light gray background for inline code
              padding: "0.2rem 0.4rem", // Padding around inline code
              borderRadius: "0.25rem", // Rounded corners for inline code
            },
            blockquote: {
              borderLeftColor: "#D97706", // Orange left border for blockquotes
              paddingLeft: "1rem", // Spacing between border and content
              fontStyle: "italic",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

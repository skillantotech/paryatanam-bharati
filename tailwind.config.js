import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
    // "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "footer-blue-jungle":
      //     "url('src/assets/images/footer-images/blueish-jungle.png')",
      //   "footer-green-jungle":
      //   "url('src/assets/images/footer-images/greenish-jungle.png')",
      // },
      animation: {
        scrollX: "scrollX 35s linear infinite",
        reverseScrollX: "reverseScrollX 35s linear infinite",
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        reverseScrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("flowbite/plugin"), flowbite.plugin()],
  },
};

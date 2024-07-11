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
      backgroundImage: {
        "black-tobottom":
          "linear-gradient(to bottom, transparent 0%, black 100%)",
      },
      animation: {
        scrollX: "scrollX 35s linear infinite",
        reverseScrollX: "reverseScrollX 35s linear infinite",
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
      },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("flowbite/plugin"), flowbite.plugin()],
  },
};

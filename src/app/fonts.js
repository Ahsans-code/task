// app/fonts.js
import localFont from "next/font/local";

export const myFont = localFont({
    src: [
        {
            path: "../../public/fonts/myFont.ttf",
            // weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-my",
});

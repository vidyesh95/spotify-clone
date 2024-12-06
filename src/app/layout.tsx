import "./globals.css";
import {Figtree} from "next/font/google";
import type {Metadata} from "next";

const font = Figtree({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Spotify - Web Player: Music for everyone",
    description: "Spotify is a digital music service that gives you access to millions of songs.",
};

export default function RootLayout(
    {children,}: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <html lang="en">
        <body className={`${font.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}

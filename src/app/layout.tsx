
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import type { Metadata } from "next";

// Setting up the Google font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inno3DTech",
  description: "3D Design and 3D Printing",
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Contexto } from "@/context/AuthContex";
import { SocketProvider } from "@/context/WebSocket";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "ecommerce, los mejores precios, los mejores productos",
  openGraph: {
    title: "Ecommerce",
    description: "ecommerce, los mejores precios, los mejores productos",
    url: "https://ecommerce-frontend.vercel.app/",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className }>
      <SocketProvider>
      <Contexto>
      <Navbar/>
        {children}
      <Footer/>
      </Contexto>
      </SocketProvider>
      </body>
    </html>
  );
}

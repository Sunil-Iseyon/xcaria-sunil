import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/src/components/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="">
        {/* <Navbar/> */}
        </div>
   
        {children}
        </body>
    </html>
  );
}
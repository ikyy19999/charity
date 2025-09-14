import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin-ext']
})

import '../../../globalsLanding.css'

import type { Metadata } from "next";
import Navbar from "../_components/navbar";

export const metadata: Metadata = {
  title: "Need Help? 🙋‍♂️",
  // icons: {
  //   icon: "/favicon.ico",
  // },
}

export default function LandingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
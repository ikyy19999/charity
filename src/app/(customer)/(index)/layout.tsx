import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin-ext']
})

import '../../globalsLanding.css'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sweet Vibes 🍩",
  icons: {
    icon: [
      { url: '/assets/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/assets/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function LandingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

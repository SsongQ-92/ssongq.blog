import type { Metadata } from 'next';

import '../config/globals.css';
import { baseURL, blogDesc, blogName, blogThumbnailURL } from '@/config/const';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: [blogThumbnailURL],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogName,
    description: blogDesc,
    images: [blogThumbnailURL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='h-full scroll-my-80 scroll-smooth'>
      <body className='flex min-h-screen flex-col font-pretendard'>
        <Header />
        <main className='mt-72 flex flex-shrink-0 flex-grow px-10'>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId='G-4C70XPBHSV' />
        <GoogleTagManager gtmId='G-4C70XPBHSV' />
      </body>
    </html>
  );
}

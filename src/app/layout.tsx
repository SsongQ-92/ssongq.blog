import type { Metadata } from 'next';

import '../config/globals.css';
import { baseURL, blogDesc, blogName, blogThumbnailURL } from '@/config/const';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

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
        <main className='flex-col-center mt-72 flex-shrink-0 flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

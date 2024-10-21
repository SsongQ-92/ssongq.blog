import type { Metadata } from 'next';

import '../config/globals.css';
import { baseDomain, blogDesc, blogName, blogThumbnailURL } from '@/config/const';

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
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
    <html lang='ko' className='h-full scroll-my-20 scroll-smooth'>
      <body className='flex min-h-screen flex-col font-pretendard'>{children}</body>
    </html>
  );
}

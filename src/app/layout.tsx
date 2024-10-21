import type { Metadata } from 'next';

import '../config/globals.css';
import { blogDesc, blogName } from '@/config/const';

export const metadata: Metadata = {
  title: blogName,
  description: blogDesc,
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

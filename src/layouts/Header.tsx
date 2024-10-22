'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const navList = [
  { name: 'SSONGQ', href: '/blog' },
  { name: 'ABOUT', href: '/about' },
  { name: 'TAGS', href: '/tags' },
];

const localePathList = ['/about'];

export default function Header() {
  const pathname = usePathname();
  const isLocalePath = localePathList.some((path) => pathname.startsWith(path));

  return (
    <nav className='flex-center fixed z-header w-full border-b-1 bg-background shadow-sm print:hidden'>
      <div className='mt-4 flex h-64 w-full max-w-1200 items-center justify-between px-10'>
        <div className='flex items-center gap-8 font-medium'>
          {navList.map((navItem) => (
            <Link
              key={navItem.name}
              href={navItem.href}
              className={cn(
                'rounded-full px-12 py-4 text-center text-14 transition-colors hover:text-primary',
                pathname?.startsWith(navItem.href)
                  ? 'font-20 bg-muted text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        <div className='flex gap-10'></div>
      </div>
    </nav>
  );
}

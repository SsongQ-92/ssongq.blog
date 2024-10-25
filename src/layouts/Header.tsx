'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';
import Button from '@/components/ui/Button';
import { githubURL, linkedInURL } from '@/config/const';
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
      <div className='mt-4 flex h-64 w-full max-w-1200 items-center justify-between px-20 sm:px-15'>
        <div className='flex items-center gap-2 font-medium sm:gap-8'>
          {navList.map((navItem) => (
            <Link
              key={navItem.name}
              href={navItem.href}
              className={cn(
                'rounded-full px-12 py-4 text-center transition-colors',
                pathname?.startsWith(navItem.href)
                  ? 'bg-muted font-medium text-primary text-12 sm:text-14 md:text-16'
                  : 'text-muted-foreground hover:bg-accent hover:text-primary text-12 sm:text-14 md:text-16'
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-4 sm:gap-10'>
          <Button intent='ghost' size='icon'>
            <Link href={linkedInURL} rel='noopener noreferrer' target='_blank'>
              <IconLinkedin className='size-22 sm:size-30' />
            </Link>
          </Button>
          <Button intent='ghost' size='icon'>
            <Link href={githubURL} rel='noopener noreferrer' target='_blank'>
              <IconGithub className='size-22 sm:size-30' />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

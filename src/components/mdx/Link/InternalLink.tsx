import { PropsWithChildren } from 'react';

import Link, { LinkProps } from 'next/link';

export default function InternalLink({ children, href, ...props }: PropsWithChildren<LinkProps>) {
  return (
    <Link
      href={href.toString() || ''}
      className='break-words text-sky-600 no-underline underline-offset-4 hover:underline'
      {...props}
    >
      {children}
    </Link>
  );
}

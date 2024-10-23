import { PropsWithChildren } from 'react';

import { LinkProps } from 'next/link';

export default function ExternalLink({ children, href, ...props }: PropsWithChildren<LinkProps>) {
  return (
    <a
      href={href.toString() || ''}
      className='break-words text-sky-600 no-underline underline-offset-4 hover:underline'
      rel='noopener noreferrer'
      target='_blank'
      {...props}
    >
      {children}
    </a>
  );
}

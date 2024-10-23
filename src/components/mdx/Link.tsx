import { PropsWithChildren } from 'react';

import { LinkProps } from 'next/link';

export const ExternalLink = ({ children, href, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href.toString() || ''}
      className='break-words text-violet-500 no-underline underline-offset-4 hover:underline'
      rel='noopener noreferrer'
      target='_blank'
      {...props}
    >
      {children}
    </a>
  );
};

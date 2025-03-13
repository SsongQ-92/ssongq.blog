import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn('flex min-h-0 flex-col gap-y-3', className)} {...props}>
      {children}
    </section>
  );
}

import { PropsWithChildren } from 'react';

import { Danger, Info, Normal, Warn } from './Icons';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warn' | 'danger' | 'normal';

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType;
  title?: string;
}

interface IconType {
  [key: string]: {
    icon: () => JSX.Element;
    boxClass: string;
  };
}

const metadata: IconType = {
  info: {
    icon: Warn,
    boxClass: 'text-informative-foreground bg-informative',
  },

  danger: {
    icon: Danger,
    boxClass: 'text-destructive-foreground bg-destructive',
  },

  warn: {
    icon: Info,
    boxClass: 'text-warning-foreground bg-warning',
  },

  normal: {
    icon: Normal,
    boxClass: 'text-secondary-foreground bg-secondary',
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const calloutType = type || 'normal';
  const metaObj = metadata[calloutType];
  const Icon = metaObj.icon;
  const boxClassName = metaObj.boxClass;

  return (
    <div className={cn('my-24 flex items-center gap-12 rounded-md px-20 py-15', boxClassName)}>
      {type !== 'normal' && (
        <div>
          <Icon />
        </div>
      )}

      <div className='callout-contents flex-1'>
        {title && <span style={{ fontWeight: 'bold' }}>{title}</span>}
        {children}
      </div>
    </div>
  );
}

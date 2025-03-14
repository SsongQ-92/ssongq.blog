import { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-16 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      intent: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'outline outline-input outline-2 bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-40 px-16 py-8',
        sm: 'h-30 sm:h-36 rounded-md px-10 sm:px-12',
        lg: 'h-44 rounded-md px-32',
        icon: 'aspect-square p-8',
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({ className, intent, size, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ intent, size, className }))} {...props}>
      {children}
    </button>
  );
}

import Link from 'next/link';

import Button from '@/components/ui/Button';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

export default function CategoryButton({ isCurrent, displayName, href, count }: Props) {
  return (
    <li>
      <Button intent={isCurrent ? 'default' : 'ghost'} size='sm'>
        <Link href={href}>
          {displayName} ({count})
        </Link>
      </Button>
    </li>
  );
}

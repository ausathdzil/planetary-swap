'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StoreNav() {
  const pathname = usePathname();

  return (
    <nav className="flex h-7 items-center justify-start px-3 text-muted-foreground text-sm border-b w-full gap-4">
      <Link
        className={cn(
          'h-full flex items-center',
          pathname === '/swap'
            ? 'text-primary border-b-2 border-primary'
            : 'text-muted-foreground hover:text-primary'
        )}
        href="/swap"
      >
        Swap
      </Link>
      <Link
        className={cn(
          'h-full flex items-center',
          pathname === '/marketplace'
            ? 'text-primary border-b-2 border-primary'
            : 'text-muted-foreground hover:text-primary'
        )}
        href="/marketplace"
      >
        Marketplace
      </Link>
    </nav>
  );
}

'use client';

import { Tabs } from '@/components/ui/tabs';
import { usePathname } from 'next/navigation';

export default function LayoutTabs({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const activeTab = pathname.split('/').pop();

  return <Tabs defaultValue={activeTab}>{children}</Tabs>;
}

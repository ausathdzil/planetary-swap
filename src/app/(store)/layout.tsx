import LayoutTabs from '@/components/store/layout-tabs';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex mt-32 w-full px-16 gap-16">
      <aside className="space-y-2">
        <span className="text-muted-foreground">Collections</span>
        <nav>
          <ul className="space-y-1">
            <li>All</li>
            <li>Footwear</li>
            <li>Headwear</li>
            <li>Hoodies</li>
            <li>Jacket</li>
          </ul>
        </nav>
      </aside>
      <section className="grow flex flex-col">
        <LayoutTabs>
          <TabsList>
            <Link className="h-full" href="/swap">
              <TabsTrigger value="swap">Swap</TabsTrigger>
            </Link>
            <Link className="h-full" href="/marketplace">
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            </Link>
          </TabsList>
          {children}
        </LayoutTabs>
      </section>
      <aside className="space-y-2">
        <span className="text-muted-foreground">Sort by</span>
        <nav>
          <ul className="space-y-1">
            <li>Relevance</li>
            <li>Trending</li>
            <li>Latest Arrivals</li>
            <li>Price: High</li>
            <li>Price: Low</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

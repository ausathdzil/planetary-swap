import StoreNav from '@/components/store/store-nav';

export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex justify-center mt-32 w-full px-16 gap-16">
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
      <section className="grow flex flex-col max-w-5xl">
        <StoreNav />
        {children}
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

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { products } from '@/lib/data';
import { Circle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MarketplacePage() {
  const filteredProduct = products.filter(
    (product) => product.type === 'marketplace'
  );

  return (
    <div className="mt-4 grid grid-cols-3 gap-8">
      {filteredProduct.map((product, i) => (
        <Link href={product.href ? product.href : '#'} key={i}>
          <Card
            className="group hover:border-primary transition-colors h-full"
            key={i}
          >
            <CardContent className="aspect-square">
              <Image
                className="rounded-lg group-hover:scale-105 transition-transform"
                src={
                  product.variants ? product.variants[0].image : product.image
                }
                alt={product.name}
              />
            </CardContent>
            <CardFooter className="justify-between">
              <span>{product.name}</span>
              <Badge className="space-x-2">
                <Circle size={12} color="#facc15" fill="#facc15" />
                <span>{product.price}</span>
              </Badge>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

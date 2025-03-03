import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { productThumbnails } from '@/lib/data';
import { ArrowLeftRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SwapPage() {
  const filteredProduct = productThumbnails.filter(
    (product) => product.type === 'swap'
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
                src={product.image}
                alt={product.name}
              />
            </CardContent>
            <CardFooter className="justify-between">
              <span>{product.name}</span>
              <Badge className="space-x-2">
                <ArrowLeftRight size={16} />
              </Badge>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

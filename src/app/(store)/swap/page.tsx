import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { productThumbnails } from '@/lib/data';
import { ArrowLeftRight } from 'lucide-react';
import Image from 'next/image';

export default function SwapPage() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-8">
      {productThumbnails.map((product, i) => (
        <Card className="group hover:border-primary transition-colors" key={i}>
          <CardContent>
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
      ))}
    </div>
  );
}

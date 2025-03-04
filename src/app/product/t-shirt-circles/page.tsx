import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { products } from '@/lib/data';
import { Circle, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function MarketplaceProductPage() {
  const product = products.find(
    (product) => product.name === 'T-Shirt Circles'
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="mt-16 flex items-start w-full justify-center p-16 gap-16">
      <div className="flex flex-col gap-8 items-start">
        <div className="aspect-square rounded-lg border">
          <Image
            src={product.variants ? product.variants[0].image : product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-16">
          {product.variants?.slice(1).map((variant, i) => (
            <div key={i} className="aspect-square rounded-lg border">
              <Image
                src={variant.image}
                alt={variant.name}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8 min-w-[30%]">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg">{product.desc}</p>
          <Badge className="text-lg space-x-2">
            <Circle color="#facc15" size={16} fill="#facc15" />
            <span>{product.price}</span>
          </Badge>
        </div>
        <Separator className="w-full" />

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Color</h3>
          <div className="flex items-center gap-4">
            {product.variants?.map((variant, i) => (
              <Button disabled key={i} variant="outline">
                {variant.name}
              </Button>
            ))}
          </div>

          <h3 className="text-2xl font-bold">Size</h3>
          <div className="flex items-center gap-4">
            {['S', 'M', 'L', 'XL'].map((size, i) => (
              <Button disabled key={i} variant="outline">
                {size}
              </Button>
            ))}
          </div>
        </div>

        <Button className="w-full space-x-2" size="lg" variant="default">
          <ShoppingCartIcon />
          <span>Add to Cart</span>
        </Button>
      </div>
    </section>
  );
}

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { products } from '@/lib/data';
import { ArrowLeftRightIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function MarketplaceProductPage() {
  return (
    <>
      <Product />
      <RelatedProducts />
    </>
  );
}

function Product() {
  const product = products.find((product) => product.name === 'Cowboy Hat');

  if (!product) {
    notFound();
  }
  return (
    <section className="mt-16 flex items-start w-full justify-center p-16 gap-16">
      <div className="flex flex-col gap-8 items-start">
        <div className="aspect-square rounded-lg">
          <Image
            src={product.variants ? product.variants[0].image : product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-16">
          {product.variants?.slice(1).map((variant, i) => (
            <div key={i} className="aspect-square rounded-lg border p-4">
              <Image
                src={variant.image}
                alt={variant.name}
                width={75}
                height={75}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8 min-w-[30%]">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg">{product.desc}</p>
          <Badge className="text-lg">
            <ArrowLeftRightIcon size={16} />
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
            {['S', 'M', 'L'].map((size, i) => (
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

function RelatedProducts() {
  const filteredProducts = products.filter(
    (product) => product.type === 'swap' && product.name !== 'Cowboy Hat'
  );

  return (
    <section className="w-full max-w-3xl flex flex-col items-center gap-8 mb-8">
      <h1 className="text-2xl font-bold">Related Products</h1>
      <Carousel
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {filteredProducts.map((product, i) => (
            <CarouselItem key={i} className="basis-1/3">
              <Link href={product.href ? product.href : '#'}>
                <Card className="group hover:border-primary transition-colors">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      className="group-hover:scale-105 transition-transform"
                      src={
                        product.variants
                          ? product.variants[0].image
                          : product.image
                      }
                      alt={product.name}
                      width={200}
                      height={200}
                    />
                  </CardContent>
                  <CardFooter className="items-center justify-between">
                    <p className="text-center font-medium">{product.name}</p>
                    <Badge className="rounded-full">
                      <ArrowLeftRightIcon size={16} />
                    </Badge>
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

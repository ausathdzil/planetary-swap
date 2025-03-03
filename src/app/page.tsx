import { ReviewCard } from '@/components/home/reviews';
import { Marquee } from '@/components/magicui/marquee';
import { Meteors } from '@/components/magicui/meteors';
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
import { Input } from '@/components/ui/input';
import { productThumbnails, reviews } from '@/lib/data';
import { ArrowLeftRightIcon, ArrowRightIcon, RocketIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-[550px] mb-8">
      <Image
        className="object-cover object-top"
        src="/hero.jpg"
        quality={100}
        alt="Hero"
        priority
        fill
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-8 p-24">
        <article className="text-center space-y-4">
          <h1 className="text-4xl font-semibold text-white">
            SWAP ACROSS THE FASHION UNIVERSE
          </h1>
          <p className="text-lg text-white">
            Join the fashion revolution. Swap your clothes, earn cosmic points,
            and shop sustainably across the planet.
          </p>
        </article>
        <div className="flex flex-col gap-4 w-1/6">
          <Button size="lg" variant="outline">
            Swap now
          </Button>
          <Button size="lg" variant="outline">
            <span>Explore the cosmos</span>
            <RocketIcon />
          </Button>
          <Link
            className="w-full text-background flex gap-2 items-center group"
            href="#"
          >
            <Button className="w-full" size="lg" variant="ghost">
              <span>Learn how it works</span>
              <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="w-full max-w-7xl flex flex-col items-center gap-8 mb-8">
      <h1 className="text-2xl font-bold">OUTER WORLD SWAPS</h1>
      <Carousel
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {productThumbnails.map((product, i) => (
            <CarouselItem key={i} className="basis-1/4">
              <Card className="group hover:border-primary transition-colors">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    className="group-hover:scale-105 transition-transform"
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                  />
                </CardContent>
                <CardFooter className="items-center justify-between">
                  <p className="text-center font-medium">{product.name}</p>
                  <Badge className="rounded-full">
                    <ArrowLeftRightIcon size={16} />
                  </Badge>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

function Testimonials() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section className="w-full flex flex-col items-center gap-8 bg-gray-50 p-16">
      <h1 className="text-2xl font-bold">WHAT THEY SAY ABOUT US</h1>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-primary text-primary-foreground w-full h-[400px] p-16 relative flex flex-col items-center justify-center overflow-hidden gap-8">
      <Meteors number={30} />
      <article className="text-center space-y-2">
        <h1 className="text-4xl font-bold">JOIN OUR COSMIC COMMUNITY</h1>
        <p>
          Sign up for our newsletter to get the latest updates on swaps,
          sustainable fashion tips, and exclusive cosmic offers.
        </p>
      </article>
      <form className="w-full flex items-center justify-center gap-4 z-10">
        <div className="*:not-first:mt-2">
          <div className="flex rounded-md shadow-xs">
            <Input
              className="-me-px rounded-e-none shadow-none focus-visible:z-10 bg-background"
              placeholder="m@example.com"
              type="email"
            />
            <button className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-default">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

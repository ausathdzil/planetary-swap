'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`
        fixed w-full top-0 z-50 flex items-center py-8 px-16 gap-8 transition-all duration-300 bg-background 
        ${
          scrolled
            ? 'bg-background/50 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }
      `}
    >
      <Link href="/" className="flex items-center gap-4">
        <Logo />
        <h1 className="font-semibold text-xl">Planetary Swap</h1>
      </Link>
      <ul className="flex gap-8 ml-auto">
        <li>
          <Link className="hover:underline underline-offset-4" href="/swap">
            Swap
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-4"
            href="/marketplace"
          >
            Marketplace
          </Link>
        </li>
        <li>
          <Link className="hover:underline underline-offset-4" href="/blog">
            Blog
          </Link>
        </li>
      </ul>
      <Link href="/login">
        <Button className="cursor-pointer" variant="outline" size="lg">
          Start Trading
        </Button>
      </Link>
    </header>
  );
}

export function Logo() {
  return (
    <Image
      aria-hidden
      src="/logo.svg"
      alt="Planetary Swap"
      width={32}
      height={32}
    />
  );
}

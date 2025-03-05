import { Header } from '@/components/layout/header';
import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/footer';

const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-hanken-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Planetary Swap',
  description: 'Swap sustainable clothing around the planet.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./logo.svg" type="image/svg" />
      </head>
      <body
        className={`${hankenGrotesk.variable} font-sans tracking-tight antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex flex-col grow flex-1 items-center pb-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

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
      <body
        className={`${hankenGrotesk.variable} font-sans antialiased min-h-screen`}
      >
        <Header />
        <main className="flex flex-col items-center pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

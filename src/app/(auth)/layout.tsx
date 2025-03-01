import { Logo } from '@/components/layout/header';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mt-32 flex flex-col items-center gap-8">
      <Link href="/">
        <Logo />
      </Link>
      {children}
    </div>
  );
}

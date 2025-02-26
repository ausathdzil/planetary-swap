import { Logo } from './header';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full px-16 py-8 space-y-16">
      <div className="grid grid-cols-5 gap-32">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <h2 className="text-lg font-semibold">Planetary</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link className="hover:text-primary/60" href="#">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link className="hover:text-primary/60" href="#">
                Help
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="#">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="#">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Legal</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link className="hover:text-primary/60" href="#">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="#">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Social</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link className="hover:text-primary/60" href="#">
                Instagram
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="#">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t pt-8">
        <p className="text-md">&copy; 2024 Planetary. All rights reserved.</p>
      </div>
    </footer>
  );
}

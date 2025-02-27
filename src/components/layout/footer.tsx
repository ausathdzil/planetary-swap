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
              <Link className="hover:text-primary/60" href="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link className="hover:text-primary/60" href="/help">
                Help
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="/help/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Legal</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link className="hover:text-primary/60" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary/60" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Social</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="https://instagram.com/ausathikram"
                className="hover:text-primary/60"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ausathdzil/planetary-swap"
                className="hover:text-primary/60"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t pt-8">
        <p className="text-md">&copy; 2025 Planetary. All rights reserved.</p>
      </div>
    </footer>
  );
}

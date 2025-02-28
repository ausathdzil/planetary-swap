import { Logo } from './header';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full px-16 py-8 space-y-16 text-muted-foreground">
      <div className="grid grid-cols-5 gap-32">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <h2 className="text-lg text-primary font-semibold">Planetary</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link className="hover:text-primary" href="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-primary font-semibold">Resources</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link className="hover:text-primary" href="/help">
                Help
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/help/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-primary font-semibold">Legal</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link className="hover:text-primary" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-primary font-semibold">Social</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="https://instagram.com/ausathikram"
                className="hover:text-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ausathdzil/planetary-swap"
                className="hover:text-primary"
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

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-muted-foreground">
          <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link href="/studio" className="hover:text-primary transition-colors">Studio</Link>
        </div>

        {/* Logo */}
        <div className="text-2xl font-heading text-foreground tracking-[0.2em] uppercase text-center flex-1 md:flex-none">
          <Link href="/">
            Katharine Pooley
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-muted-foreground">
          <Link href="/boutique" className="hover:text-primary transition-colors">Boutique</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button aria-label="Menu" className="text-foreground">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-light">
        <div>
          <h4 className="font-heading text-xl mb-6 tracking-wider">Katharine Pooley</h4>
          <p className="text-muted/80 leading-relaxed">
            Creating exquisite, timeless spaces around the globe. Luxury interior architecture and design.
          </p>
        </div>
        
        <div>
          <h4 className="uppercase tracking-[0.2em] mb-6 text-primary">Studio</h4>
          <ul className="space-y-4 text-muted/80">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="/press" className="hover:text-primary transition-colors">Press & Awards</Link></li>
            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-[0.2em] mb-6 text-primary">Legal</h4>
          <ul className="space-y-4 text-muted/80">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-[0.2em] mb-6 text-primary">Contact</h4>
          <ul className="space-y-4 text-muted/80">
            <li>London Studio</li>
            <li>160 Walton Street</li>
            <li>Chelsea, London SW3 2JL</li>
            <li className="pt-4"><a href="mailto:enquiries@katharinepooley.com" className="hover:text-primary transition-colors">enquiries@katharinepooley.com</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-muted/20 text-center text-muted/60 text-xs tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Katharine Pooley Clone. All Rights Reserved.
      </div>
    </footer>
  );
}

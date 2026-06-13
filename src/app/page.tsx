import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}

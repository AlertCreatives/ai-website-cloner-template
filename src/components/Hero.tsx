import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-stone-200 z-0 flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Interior" 
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-wide leading-tight drop-shadow-sm">
          Luxury Interior Architecture & Design
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl drop-shadow-sm mb-10">
          Creating exquisite, timeless spaces around the globe.
        </p>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 uppercase tracking-[0.2em] text-sm transition-all">
          Explore Portfolio
        </button>
      </div>
    </section>
  );
}

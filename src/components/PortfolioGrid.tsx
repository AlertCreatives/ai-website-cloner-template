import Image from "next/image";

export default function PortfolioGrid() {
  const projects = [
    { id: 1, title: 'The London Townhouse', category: 'Residential', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800&h=1000' },
    { id: 2, title: 'Mayfair Penthouse', category: 'Architecture', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800&h=1000' },
    { id: 3, title: 'Coastal Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=1000' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl text-foreground mb-4">Featured Projects</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted mb-6">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="text-center">
                <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">{project.category}</p>
                <h3 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="border border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 uppercase tracking-[0.2em] text-sm transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

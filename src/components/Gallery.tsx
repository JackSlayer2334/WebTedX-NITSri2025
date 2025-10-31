import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Images } from "lucide-react";
import { Card } from "@/components/ui/card";

const galleryImages = [
  "/past/feature1.png",
  "/past/feature2.jpeg",
  "/past/feature3.jpeg",
  "/past/feature5.jpeg",
  "/past/feature6.jpeg",
  "/past/feature8.jpeg",
];

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" ref={ref} className="py-28 md:py-32 bg-gradient-to-b from-secondary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
            <Images className="w-10 h-10 text-primary mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Echoes from the <span className="text-primary gradient-text">Past</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg md:text-xl animate-fade-in delay-200">
            A Nostalgic Gallery of Cherished Memories and Historic Milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              style={{ 
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                animationFillMode: 'forwards'
              }}
              className={`aspect-video overflow-hidden bg-card/60 backdrop-blur-md border-border/50 hover-lift group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} card-glow`}
            >
              <img
                src={image}
                alt={`Past event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

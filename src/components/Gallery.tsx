import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Images } from "lucide-react";
import { Card } from "@/components/ui/card";

const galleryImages = [
  "/past/feature1.png",
  "/past/feature2.jpeg",
  "/past/feature3.jpeg",
  "/past/feature5.jpeg",
  "/past/feature99.jpeg",
  "/past/feature8.jpeg",
];

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 md:py-28 bg-black text-white relative overflow-hidden"
    >
      {/* Subtle red glow background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#e62b1e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-[#e62b1e] rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-5">
            <Images className="w-10 h-10 text-[#e62b1e] mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Echoes from the <span className="text-[#e62b1e]">Past</span>
            </h2>
          </div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg md:text-xl">
            A nostalgic gallery of cherished memories and historic milestones.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                animationFillMode: "forwards",
              }}
              className={`aspect-video overflow-hidden bg-[#111]/80 border border-[#222] 
              hover:border-[#e62b1e]/60 transition-all duration-500 
              hover:shadow-[0_0_25px_#e62b1e33] group relative rounded-xl
              ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <img
                src={image}
                alt={`Past event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Optional subtle red glow on hover */}
              <div className="absolute inset-0 bg-[#e62b1e]/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

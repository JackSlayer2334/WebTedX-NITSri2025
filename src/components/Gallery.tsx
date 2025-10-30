import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    <section id="gallery" ref={ref} className="py-24 bg-background">
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Echoes from the past
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          A Nostalgic Gallery of Cherished Memories and Historic Milestones
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-video overflow-hidden rounded-lg hover-lift bg-gray-100"
            >
              <img
                src={image}
                alt={`Past event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const currentSponsors = [
  {
    name: "ICICI Bank",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=150&fit=crop",
    category: "Association Partner",
  },
  {
    name: "D-Link",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=300&h=150&fit=crop",
    category: "Technology Partner",
  },
];

const pastSponsors = [
  "/sponsers/ICICI.jpeg",
  "/sponsers/dlink.jpeg",
  "/sponsers/intecinfotec.jpg",
  "/sponsers/juniper.jpeg",
];

const Sponsors = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="sponsors"
      ref={ref}
      className="py-24 bg-secondary/20 scroll-mt-24"
    >
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Current Sponsors
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Celebrating the Generous Partners Empowering Our Success
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentSponsors.map((sponsor, index) => (
              <div key={index} className="text-center">
                <p className="text-sm font-semibold text-primary mb-4">
                  {sponsor.category}
                </p>
                <div className="bg-card border border-border rounded-lg p-8 hover-lift aspect-video overflow-hidden flex items-center justify-center">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Past Sponsors
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Honoring Our Previous Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {pastSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover-lift aspect-video overflow-hidden flex items-center justify-center"
              >
                <img
                  src={sponsor}
                  alt={`Past sponsor ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            and many more...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

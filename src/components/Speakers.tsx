import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const speakers = [
  {
    name: "Faheem Abdullah",
    title: "Singer, Song-Writer",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop"
  },
  {
    name: "Prachi Pratap",
    title: "Advocate @ Supreme Court of India",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "Mansi Chaudhary",
    title: "Nutritionalist, Certified Diabetes Educator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  },
  {
    name: "Samir Ahsan",
    title: "CEO & Founder - Infinity Access",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Mohd. Yaseen Reshi",
    title: "Renowned Chef and Culinary expert",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop"
  },
  {
    name: "Jagdeep Singh",
    title: "JKAS Officer & Public Speaker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Noor Mohammad Shah",
    title: "Traditional Sufi Musician",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
];

const Speakers = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="speakers" ref={ref} className="py-24 bg-background">
      <div className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Speakers & Performers
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Meet our exceptional lineup of speakers and performers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover-lift overflow-hidden group relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-background/90 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 hover:border-primary/60 card-glow hover:shadow-2xl hover:shadow-primary/30"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={speaker.image}
                  alt={`${speaker.name} - ${speaker.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-70" />
              </div>
              <CardContent className="p-3 md:p-4 text-center relative z-10">
                <h3 className="text-sm md:text-base font-bold mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">{speaker.name}</h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-tight">{speaker.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;

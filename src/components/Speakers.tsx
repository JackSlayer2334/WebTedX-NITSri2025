import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mic } from "lucide-react";

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
    <section id="speakers" ref={ref} className="py-28 md:py-32 bg-gradient-to-b from-background via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
            <Mic className="w-10 h-10 text-primary mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-primary gradient-text">Speakers</span> & Performers
            </h2>
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg md:text-xl animate-fade-in delay-200">
            Meet our exceptional lineup of speakers and performers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              style={{ 
                animationDelay: isVisible ? `${index * 50}ms` : '0ms',
                animationFillMode: 'forwards'
              }}
              className={`bg-card/60 backdrop-blur-md border-border/50 hover-lift overflow-hidden group relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-background/95 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 hover:border-primary/80 card-glow hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={speaker.image}
                  alt={`${speaker.name} - ${speaker.title}`}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </div>
              <CardContent className="p-5 md:p-6 text-center relative z-10 bg-background/50 backdrop-blur-sm">
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">{speaker.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-tight">{speaker.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;

import { Play, Calendar, MapPin } from "lucide-react";
import GalaxyCollision from "./GalaxyCollision";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GalaxyCollision />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
          <span className="text-primary">Collision</span>{" "}
          <span className="text-foreground">That Creates</span>
          <br />
          <span className="text-foreground">The </span>
          <span className="text-primary">Change</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-200">
          14<sup>th</sup> September - Convocation Complex, KU, Hazratbal
        </p>

        <div className="flex justify-center mb-16 animate-fade-in delay-400">
          <button className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all duration-300 hover:scale-110 glow-effect">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
          </button>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto animate-fade-in delay-600">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About The Event
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-8">
            This year TEDx NIT Srinagar features the theme, 'Collision That Creates The Change.' 
            We explore how the clash of ideas, cultures, and perspectives sparks innovation and 
            transformation, driving us toward a better tomorrow.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Card className="bg-background/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 w-full md:w-auto hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-primary mb-1">WHERE</h3>
                  <p className="text-sm text-foreground/90 font-medium">Convocation Complex</p>
                  <p className="text-xs text-muted-foreground">KU, Hazratbal</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 w-full md:w-auto hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-primary mb-1">WHEN</h3>
                  <p className="text-sm text-foreground/90 font-medium">Saturday</p>
                  <p className="text-xs text-muted-foreground">14<sup>th</sup> September</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

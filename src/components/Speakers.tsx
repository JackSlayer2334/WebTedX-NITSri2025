import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mic } from "lucide-react";

const speakers = [
  {
    name: "Coming Soon",
    title: "Stay Tuned for the Speaker Reveal",
    image: "./speaker/unknown.png",
  },
  {
    name: "Coming Soon",
    title: "Stay Tuned for the Speaker Reveal",
    image: "./speaker/unknown.png",
  },
  {
    name: "Coming Soon",
    title: "Stay Tuned for the Speaker Reveal",
    image: "./speaker/unknown.png",
  },
  {
    name: "Coming Soon",
    title: "Stay Tuned for the Speaker Reveal",
    image: "./speaker/unknown.png",
  },
];

const Speakers = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="speakers"
      ref={ref}
      className="py-28 md:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* 🔴 Red Glow Background (same as PastSpeakers) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#E62B1E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E62B1E] rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* 🎤 Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
            <Mic className="w-10 h-10 text-[#E62B1E] mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-[#E62B1E]">Speakers</span> & Performers
            </h2>
          </div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg md:text-xl">
            Meet our exceptional lineup of speakers and performers
          </p>
        </div>

        {/* 🧑‍🎤 Speaker Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              style={{
                animationDelay: isVisible ? `${index * 60}ms` : "0ms",
                animationFillMode: "forwards",
              }}
              className={`bg-[#111]/80 border border-[#222] rounded-xl 
              overflow-hidden group relative transition-all duration-500 
              hover:border-[#E62B1E]/60 hover:shadow-[0_0_25px_#E62B1E33]
              ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              {/* 🖼️ Speaker Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={speaker.image}
                  alt={`${speaker.name} - ${speaker.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              {/* 📝 Card Content */}
              <CardContent className="p-4 text-center relative z-10 bg-black/50 backdrop-blur-sm">
                <h3 className="text-base md:text-lg font-semibold mb-1 group-hover:text-[#E62B1E] transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-tight">
                  {speaker.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;

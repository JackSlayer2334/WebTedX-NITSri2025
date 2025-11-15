import { useState, useEffect, useRef } from "react";
import { Mic } from "lucide-react";

// --- Mock Components for Single-File Environment ---
// The original imports for Card/CardContent were local paths that caused build errors.
// These simple mock components replicate the structure needed for the application to run.
const Card = ({ className, children, style }) => (
  // Note: className and style attributes are passed directly to the div
  <div className={`rounded-xl ${className}`} style={style}>
    {children}
  </div>
);

const CardContent = ({ className, children }) => (
  <div className={className}>{children}</div>
);

// --- Local useScrollAnimation Hook Implementation (Fix for Unresolved Import) ---
// This hook uses the Intersection Observer API to detect when the element enters the viewport.
const useScrollAnimation = (
  options = { threshold: 0.1, rootMargin: "0px" }
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing once visible to prevent re-triggering
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isVisible };
};

const speakers = [
  {
    name: "Mr. Mustaaque Ali Ahmad Khan",
    title: "Actor",
    image: "./speaker/fl9.png",
  },
  {
    name: "Mr.Jagdeep Singh",
    title: "JKAS",
    image: "./speaker/fl1.png",
  },
  {
    name: "Dr. Sonali Gupta",
    title: "Director",
    image: "./speaker/fl4.png",
  },
  {
    name: "Shri Khalid Wani",
    title: "Global Businessman",
    image: "./speaker/fl3.png",
  },
  {
    name: "Miss. Licypriya",
    title: "Climate Activist",
    image: "./speaker/fl2.png",
  },
  {
    name: "Mr. Mir Sarwar",
    title: "Actor",
    image: "./speaker/fl5-2.png",
  },
  {
    name: "Miss. Mehmeet Syed",
    title: "Singer",
    image: "./speaker/fl6.png",
  },
  {
    name: "KVM. Dr. Sumithra Prasad",
    title: "Founder of DORAI Foundation",
    image: "./speaker/fl7.png",
  },
  {
    name: "Mr. Javed Ahmad",
    title: "Social Worker",
    image: "./speaker/fl8.png",
  },

  {
    name: "Mr. Owais Yaqoob",
    title: "Professional MMA Fighter",
    image: "./speaker/fl10.png",
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
      {/* 🔴 Background Glow */}
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
              // Card background is set to solid black here
              className={`bg-black border border-[#222] rounded-xl 
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              </div>

              {/* 📝 Card Content (Fixed = Solid Black + Equal Height) */}
              <CardContent className="p-4 text-center relative z-10 bg-black min-h-[90px]">
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

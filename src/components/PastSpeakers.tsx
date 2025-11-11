import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const speakers = [
  {
    name: "Ankur Warikoo",
    title: "Businessman / Influencer",
    image: "https://savedaughters.com/public/ckimages/ck_1648103000.jpg",
  },
  {
    name: "Faheem Abdullah",
    title: "Singer / Composer",
    image: "./past/fah.jpg",
  },
  {
    name: "Dr. Sehriah Asgar",
    title: "IAS Officer / DC Baramulla",
    image: "./past/sehrish.jpeg",
  },
  {
    name: "Sonam Lotus",
    title: "Director Meteorological Dept. J&K",
    image:
      "https://kashmirobserver.net/wp-content/uploads/2023/10/Sonam-Lotus.jpg",
  },
  {
    name: "Mubeen Masudi",
    title: "Founder of Rise & Wise App",
    image: "https://risewithrise.com/wp-content/uploads/2025/02/mubeen.jpg",
  },
  {
    name: "Noor Mohammad",
    title: "Traditional Goof Bossasa",
    image:
      "https://i.guim.co.uk/img/media/ccb29895415f8ef37b48e510612ce1c54c3647d2/179_344_5004_3002/master/5004.jpg?width=1900&dpr=1&s=none&crop=none",
  },
  {
    name: "Rizza Alee",
    title: "Musician / Composer",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9vJOVH8EE3U%2Fmaxresdefault.jpg&f=1&nofb=1",
  },
  {
    name: "Khalid Wani",
    title: "Western Digital",
    image: "https://contentstatic.timesjobs.com/img/61576474/Master.jpg",
  },
  {
    name: "Auqib Wani",
    title: "Forbes' 30 Under 30",
    image:
      "https://pbs.twimg.com/profile_images/1359137132133056512/nq8niXLo_400x400.jpg",
  },
];

const PastSpeakers = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="pastspeakers"
      ref={ref}
      className="py-28 md:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* 🔴 Red Glow Background (copied from Speakers section) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#E62B1E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E62B1E] rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Trailblazers of the <span className="text-[#E62B1E]">Past</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Voices from our previous events who sparked inspiration.
          </p>
        </div>

        {/* Speaker Grid */}
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

export default PastSpeakers;

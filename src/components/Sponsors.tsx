import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const currentSponsors = [
  {
    name: "Fortinet",
    image: "/sponsers/im.png",
    category: "",
  },
  {
    name: "Intecinfotech",
    image: "/sponsers/intec-logo.png",
    category: "",
  },
  {
    name: "ICICI Bank",
    image: "/sponsers/icici.png",
    category: "",
  },
  {
    name: "JK Bank",
    image: "/sponsers/jk2.png",
    category: "",
  },
  {
    name: "Raising Kashmir",
    image: "/sponsers/rk.png",
    category: "",
  },

  {
    name: "CP",
    image: "/sponsers/cp1.png",
    category: "",
  },
  {
    name: "Arista",
    image: "/sponsers/ari.png",
    category: "",
  },
  {
    name: "Savex",
    image: "/sponsers/tr3.png",
    category: "",
  },
  {
    name: "Nathu's Sweets",
    image: "/sponsers/NTU.jpeg",
    category: "",
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
      className="py-28 md:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#E62B1E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E62B1E] rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container relative z-10 mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* 🏆 Current Sponsors */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Current <span className="text-[#E62B1E]">Sponsors</span>
          </h2>

          <p className="text-gray-400 text-center mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            Celebrating the Generous Partners Empowering Our Success
          </p>

          {/* ⭐ Bigger Cards + 3 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {currentSponsors.map((sponsor, index) => (
              <div key={index} className="text-center">
                <p className="text-sm font-semibold text-[#E62B1E] mb-3">
                  {sponsor.category}
                </p>

                <div
                  className="bg-white border border-[#222] rounded-2xl overflow-hidden
                  aspect-[5/3] flex items-center justify-center
                  transition-all duration-500 hover:border-[#e62b1e]/60 hover:shadow-[0_0_35px_#e62b1e33]
                  group relative"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>

                  <div
                    className="absolute inset-0 bg-[#e62b1e]/10 opacity-0 
                    group-hover:opacity-10 transition-opacity duration-500"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

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
      className="py-28 md:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* 🔴 Red Glow Background (same as FAQ section) */}
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
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Current <span className="text-[#E62B1E]">Sponsors</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            Celebrating the Generous Partners Empowering Our Success
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentSponsors.map((sponsor, index) => (
              <div key={index} className="text-center">
                <p className="text-sm font-semibold text-[#E62B1E] mb-4">
                  {sponsor.category}
                </p>
                <div className="bg-[#111]/80 border border-[#222] rounded-xl p-8 aspect-video overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-[#E62B1E]/50 hover:shadow-[0_0_20px_#E62B1E22] hover:scale-[1.02]">
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

        {/* 💼 Past Sponsors */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Past <span className="text-[#E62B1E]">Sponsors</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            Honoring Our Previous Partners
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {pastSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-[#111]/80 border border-[#222] rounded-xl p-6 aspect-video overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-[#E62B1E]/50 hover:shadow-[0_0_20px_#E62B1E22] hover:scale-[1.02]"
              >
                <img
                  src={sponsor}
                  alt={`Past sponsor ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-8">and many more...</p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

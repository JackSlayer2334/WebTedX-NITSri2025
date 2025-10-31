import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users } from "lucide-react";

// Guest data
const guests = [
  {
    name: "Prof. Binod Kumar Kanaujia",
    designation: "NIT Srinagar Director",
    image: "/guests/images/prof binod.jpeg",
  },
  {
    name: "Prof. Nilofer Khan",
    designation: "Kashmir University Vice-Chancellor",
    image: "/guests/images/ProfNiloferKhan.png",
  },
  {
    name: "Prof. Atikur Rehman",
    designation: "NIT Srinagar Registrar",
    image: "/guests/images/atikur_rehman.png",
  },
  {
    name: "Prof. Monika Gupta",
    designation: "NIFT Srinagar Director",
    image: "/guests/images/prof monika gupta.jpeg",
  },
  {
    name: "Mr. Faz Lul Haseeb",
    designation: "Srinagar Smart City CEO",
    image: "/guests/images/faz lul haseeb.jpeg",
  },
  {
    name: "Mr. Shafqat Bashir",
    designation: "General Manager Srinagar Smart City",
    image: "/guests/images/Mr. Shafqat Bashir.jpeg",
  },
  {
    name: "Prof. Shakil Ahmad Romshoo",
    designation: "IUST Srinagar Vice Chancellor",
    image: "/guests/images/Prof. Shakil Ahmad Romshoo.jpg",
  },
  {
    name: "Prof. Abdul Wahid",
    designation: "IUST Srinagar Registrar",
    image: "/guests/images/prof abdul wahid.jpeg",
  },
  {
    name: "Prof. (Dr.) Iffat Hassan Shah",
    designation: "GMC Srinagar Dean",
    image: "/guests/images/Prof. (Dr.) Iffat Hassan Shah.jpeg",
  },
  {
    name: "Prof. Nazir Ahmad Ganai",
    designation: "SKUAST Kashmir Vice-Chancellor",
    image: "/guests/images/prof nazir ahmad ganai.jpeg",
  },
  {
    name: "Dr. Manoj Singh Gaur",
    designation: "IIT Jammu Director",
    image: "/guests/images/Dr. Manoj Singh Gaur.png",
  },
  {
    name: "Prof. Syed Wilayat Hussain Rizvi",
    designation: "Cluster University Registrar",
    image: "/guests/images/prof syed wilayat hussain rizvi.jpeg",
  },
  {
    name: "Prof. Mohammad Mobin",
    designation: "Cluster University Vice-Chancellor",
    image: "/guests/images/Prof. Mohammad Mobin.png",
  },
  {
    name: "Sh. Ashaq Hussain Dar",
    designation: "NIELET Director",
    image: "/guests/images/Sh. Ashaq Hussain Dar — NIELIT.jpeg",
  },
  {
    name: "Dr. A.H. Rizvi",
    designation: "IGNOU Srinagar Regional Director",
    image: "/guests/images/Dr. A. H. Rizvi.jpeg",
  },
];

const Guests = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="guests" ref={ref} className="py-28 md:py-32 bg-gradient-to-b from-secondary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
            <Users className="w-10 h-10 text-primary mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Distinguished <span className="text-primary gradient-text">Guests</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg md:text-xl animate-fade-in delay-200">
            Honored to host exceptional personalities who inspire and lead
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {guests.map((guest, index) => (
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
                  src={guest.image}
                  alt={`${guest.name} - ${guest.designation}`}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </div>
              <CardContent className="p-5 md:p-6 text-center relative z-10 bg-background/50 backdrop-blur-sm">
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {guest.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-tight">
                  {guest.designation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;

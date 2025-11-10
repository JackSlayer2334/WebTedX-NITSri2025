import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 md:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* 🔴 Red Glow Background (same as FAQ & Sponsors sections) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#E62B1E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E62B1E] rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* 📞 Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get in <span className="text-[#E62B1E]">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg md:text-xl max-w-2xl mx-auto">
          We’re here to help — reach out with any questions or inquiries.
        </p>

        {/* 🗺️ Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#111]/80 border border-[#222] rounded-xl transition-all duration-300 hover:border-[#E62B1E]/50 hover:shadow-[0_0_20px_#E62B1E22]">
            <CardContent className="p-8 text-center">
              <MapPin className="w-12 h-12 text-[#E62B1E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-400">
                National Institute of Technology, Hazratbal, Srinagar - 190006
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#111]/80 border border-[#222] rounded-xl transition-all duration-300 hover:border-[#E62B1E]/50 hover:shadow-[0_0_20px_#E62B1E22]">
            <CardContent className="p-8 text-center">
              <Phone className="w-12 h-12 text-[#E62B1E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-400">+91 90000 00000</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111]/80 border border-[#222] rounded-xl transition-all duration-300 hover:border-[#E62B1E]/50 hover:shadow-[0_0_20px_#E62B1E22]">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 text-[#E62B1E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-400">tedx@nitsri.ac.in</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

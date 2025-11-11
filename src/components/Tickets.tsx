import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import PaymentPopup from "./PaymentPopup"; // Import the popup

const ticket = {
  name: "All Access Ticket",
  originalPrice: "₹999",
  discountedPrice: "₹599",
  features: [
    "Access to all TEDx speaker sessions and performances",
    "Opportunity to interact and network with speakers",
    "Exclusive access to entertainment and cultural programs",
    "Complimentary lunch for all attendees",
    "Evening snacks to keep your energy high",
    "Refreshing drinks served throughout the event",
    "Campus exploration and guided event tours",
    "Access to all event shops and partner stalls",
    "Digital certificate of participation",
  ],
  tagline:
    "One ticket, endless inspiration — from thought-provoking talks to full entertainment, great food, and unforgettable experiences!",
};

const Tickets = () => {
  const { ref, isVisible } = useScrollAnimation();
  // State to manage the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Handlers to open and close the popup
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <section
        id="tickets"
        ref={ref}
        className="py-28 md:py-32 bg-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-[#E62B1E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E62B1E] rounded-full blur-3xl"></div>
        </div>

        <div
          className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Buy <span className="text-[#E62B1E]">Tickets</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg md:text-xl">
            Hurry up — limited seats available! Get your pass now at a special
            discounted price.
          </p>

          <div className="max-w-md mx-auto">
            <Card
              className="bg-[#111]/80 border border-[#222] rounded-xl 
                overflow-hidden relative transition-all duration-500 
                hover:border-[#E62B1E]/60 hover:shadow-[0_0_25px_#E62B1E33]"
            >
              <div className="absolute top-4 right-4 bg-[#E62B1E] text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Limited Offer
              </div>

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                <div className="text-4xl font-bold text-[#E62B1E]">
                  <span className="text-gray-500 line-through text-2xl mr-2">
                    {ticket.originalPrice}
                  </span>
                  {ticket.discountedPrice}
                  <span className="text-lg text-gray-400 font-normal">
                    {" "}
                    / person
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 text-gray-300">
                {ticket.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E62B1E] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}

                <Button
                  onClick={openPopup} // Add onClick handler here
                  className="w-full bg-[#E62B1E] hover:bg-[#d8261b] text-white glow-effect mt-6 text-lg font-semibold transition-all duration-300"
                >
                  Pay ₹599 Now
                </Button>

                {/* <p className="text-xs text-center text-gray-500">
                </p> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <PaymentPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Tickets;

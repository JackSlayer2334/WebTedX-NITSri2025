import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ticketOptions = [
  {
    name: "VIP Ticket",
    price: "₹799",
    features: [
      "Priority front row seating",
      "Exclusive lunch with guests",
      "Official Merchandise",
      "Complementary snacks",
    ],
  },
  {
    name: "Standard Ticket",
    price: "₹499",
    features: [
      "Standard entry pass",
      "Complementary lunch & snacks",
      "Souvenirs",
    ],
  },
];

const Tickets = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="tickets" ref={ref} className="py-24 bg-secondary/20">
      <div className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Buy Tickets
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Secure Your Seat to the Show: An Exclusive Opportunity to Experience
          Unforgettable Moments Live
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ticketOptions.map((ticket, index) => (
            <Card
              key={index}
              className="bg-card border-border hover-lift relative overflow-hidden"
            >
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                <div className="text-4xl font-bold text-primary">
                  {ticket.price}
                  <span className="text-lg text-muted-foreground font-normal">
                    {" "}
                    / person
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {ticket.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect mt-6">
                  Pay Now
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Secured by Razorpay
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;

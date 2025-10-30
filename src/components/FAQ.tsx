import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "After the payment, when will I receive the event ticket?",
    answer:
      "After your payment, the event ticket will be mailed to you on your given email id within 4 - 6 hrs. If there's any issue regarding the same you can reach us at tedx@nitsri.ac.in",
  },
  {
    question: "Will there be opportunities to interact with the speakers?",
    answer:
      "VIP ticket holders will have an exclusive lunch with guests. For other attendees, interaction opportunities will depend on the event schedule. There may also be Q&A sessions following the talks.",
  },
  {
    question: "How can I buy tickets for the event?",
    answer:
      'Tickets can be purchased through our official website. Look for the "Buy Now" button next to each ticket type.',
  },
  {
    question: "How will I receive my physical ticket and food coupon?",
    answer:
      "Physical tickets, which include your food coupon, will be distributed to you on the day of the event. Please bring a valid ID and your digital ticket confirmation for verification.",
  },
  {
    question: "Are tickets refundable or transferable?",
    answer:
      "Tickets are non-refundable and non-transferable. Please bring a valid ID for verification to enter the event.",
  },
  {
    question: "Where and when will the TEDx conference take place?",
    answer:
      "TEDxNITSrinagar is scheduled to be held on 14th of September at the Convocation Complex, KU, Hazratbal",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" ref={ref} className="py-24 bg-background">
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Unravel Your Queries: A Comprehensive Guide to Frequently Asked
          Questions and Expert Insights
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

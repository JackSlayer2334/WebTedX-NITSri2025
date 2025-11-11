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
      "After your payment, the event ticket will be mailed to you on your given email ID within 4 - 6 hrs. If there's any issue, you can reach us at tedx@nitsri.ac.in",
  },
  {
    question: "Will there be opportunities to interact with the speakers?",
    answer:
      "For attendees, interaction opportunities will depend on the event schedule. There may also be Q&A sessions following the talks.",
  },
  {
    question: "How can I buy tickets for the event?",
    answer:
      'Tickets can be purchased through our official website. Look for the "Buy Now" button.',
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
      "TEDxNITSrinagar is scheduled to be held on 18th November at the Sher-Kashmir International Conference Centre,Cheshmashahi,near Centaur Hotel, Srinagar, JK-191121",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="faq"
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
        {/* 🧾 Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Frequently Asked <span className="text-[#E62B1E]">Questions</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg md:text-xl max-w-2xl mx-auto">
          Unravel your queries: A guide to event details and insights.
        </p>

        {/* 💬 FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#111]/80 border border-[#222] rounded-xl overflow-hidden 
                  transition-all duration-300 hover:border-[#E62B1E]/50 
                  hover:shadow-[0_0_20px_#E62B1E22]"
              >
                <AccordionTrigger className="text-left px-6 py-4 text-lg font-semibold hover:text-[#E62B1E] transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 px-6 pb-4 leading-relaxed">
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

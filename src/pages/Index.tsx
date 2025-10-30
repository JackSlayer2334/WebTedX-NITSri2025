import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Tickets from "@/components/Tickets";
import FAQ from "@/components/FAQ";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Speakers />
      <Schedule />
      <Gallery />
      <Tickets />
      <FAQ />
      <Sponsors />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;

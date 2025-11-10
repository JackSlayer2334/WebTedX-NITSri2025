import React from "react";
import { Wrench } from "lucide-react";

const Maintenance: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background/80 to-secondary/10 text-foreground px-6 text-center">
      {/* Decorative glowing orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-primary/40 rounded-full blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 animate-fade-in">
        <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
          <Wrench className="w-12 h-12 text-primary mr-3 animate-spin-slow" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-primary gradient-text">Site</span> Under
            Maintenance
          </h1>
        </div>

        <p className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl mb-8 animate-fade-in delay-200">
          We're working hard to make things better. Please check back soon.
        </p>

        <div className="text-sm text-muted-foreground/80">
          © {new Date().getFullYear()} TEDx NIT Srinagar{" "}
        </div>
      </div>
    </section>
  );
};

export default Maintenance;

import { Clock, Mic, Coffee, Utensils, Music, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

type ScheduleItem = {
  time: string;
  title: string;
  type: "talk" | "ceremony" | "break" | "performance" | "meal";
};

const scheduleItems: ScheduleItem[] = [
  { time: "8:30 - 09:00 AM", title: "Registration & Welcome Reception", type: "ceremony" },
  { time: "9:00 - 09:40 AM", title: "Inauguration Ceremony", type: "ceremony" },
  { time: "9:45 - 10:10 AM", title: "Talk 1 - Prachi Pratap", type: "talk" },
  { time: "10:10 - 10:35 AM", title: "Talk 2 - Samir Ahsan", type: "talk" },
  { time: "10:35 - 11:00 AM", title: "Talk 3 - Mansi Chaudhary", type: "talk" },
  { time: "11:00 - 11:30 AM", title: "High Tea Break", type: "break" },
  { time: "11:30 - 12:00 PM", title: "Performance By Noor Mohammad", type: "performance" },
  { time: "12:00 - 12:25 PM", title: "Talk 4 - Mohd Yaseen", type: "talk" },
  { time: "12:25 - 12:50 PM", title: "Talk 5 - Jagdeep Singh", type: "talk" },
  { time: "12:50 - 1:45 PM", title: "Lunch", type: "meal" },
  { time: "1:45 - 2:10 PM", title: "Talk 6 - TBD", type: "talk" },
  { time: "2:10 - 2:40 PM", title: "Talk 7 - Faheem Abdullah", type: "talk" },
  { time: "2:40 - 3:00 PM", title: "Felicitation Ceremony", type: "ceremony" },
];

const getIcon = (type: ScheduleItem["type"]) => {
  switch (type) {
    case "talk":
      return <Mic className="w-5 h-5" />;
    case "ceremony":
      return <Award className="w-5 h-5" />;
    case "break":
      return <Coffee className="w-5 h-5" />;
    case "performance":
      return <Music className="w-5 h-5" />;
    case "meal":
      return <Utensils className="w-5 h-5" />;
    default:
      return <Clock className="w-5 h-5" />;
  }
};

const getTypeColor = (type: ScheduleItem["type"]) => {
  switch (type) {
    case "talk":
      return "border-l-primary bg-primary/5 hover:bg-primary/10";
    case "ceremony":
      return "border-l-orange-500 bg-orange-500/5 hover:bg-orange-500/10";
    case "break":
      return "border-l-blue-500 bg-blue-500/5 hover:bg-blue-500/10";
    case "performance":
      return "border-l-purple-500 bg-purple-500/5 hover:bg-purple-500/10";
    case "meal":
      return "border-l-green-500 bg-green-500/5 hover:bg-green-500/10";
    default:
      return "border-l-gray-500 bg-gray-500/5";
  }
};

const Schedule = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="schedule" ref={ref} className="py-28 md:py-32 bg-gradient-to-b from-secondary/10 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
            <Clock className="w-10 h-10 text-primary mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Event <span className="text-primary gradient-text">Schedule</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg md:text-xl animate-fade-in delay-200">
            A day full of inspiring talks, performances, and unforgettable moments
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary opacity-30"></div>
            
            <div className="space-y-6">
              {scheduleItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ 
                    animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10 items-center justify-center animate-pulse-glow">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>

                  <Card
                    className={`ml-0 md:ml-16 bg-card/60 backdrop-blur-md border-l-4 ${getTypeColor(item.type)} border-border/50 hover-lift transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group overflow-hidden`}
                  >
                    <CardContent className="p-6 md:p-7">
                      <div className="flex items-start gap-5">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/10">
                          {getIcon(item.type)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                            <p className="text-base font-bold text-primary group-hover:text-primary/80 transition-colors">
                              {item.time}
                            </p>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30 backdrop-blur-sm">
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

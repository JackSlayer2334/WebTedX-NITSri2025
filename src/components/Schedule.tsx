import { Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scheduleItems = [
  { time: "8:30 - 09:00 AM", title: "Registration & Welcome Reception" },
  { time: "9:00 - 09:40 AM", title: "Inauguration Ceremony" },
  { time: "9:45 - 10:10 AM", title: "Talk 1 - Prachi Pratap" },
  { time: "10:10 - 10:35 AM", title: "Talk 2 - Samir Ahsan" },
  { time: "10:35 - 11:00 AM", title: "Talk 3 - Mansi Chaudhary" },
  { time: "11:00 - 11:30 AM", title: "High Tea Break" },
  { time: "11:30 - 12:00 PM", title: "Performance By Noor Mohammad" },
  { time: "12:00 - 12:25 PM", title: "Talk 4 - Mohd Yaseen" },
  { time: "12:25 - 12:50 PM", title: "Talk 5 - Jagdeep Singh" },
  { time: "12:50 - 1:45 PM", title: "Lunch" },
  { time: "1:45 - 2:10 PM", title: "Talk 6 - TBD" },
  { time: "2:10 - 2:40 PM", title: "Talk 7 - Faheem Abdullah" },
  { time: "2:40 - 3:00 PM", title: "Felicitation Ceremony" },
];

const Schedule = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="schedule" ref={ref} className="py-16 bg-secondary/20">
      <div className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Event Schedule
        </h2>
        <p className="text-muted-foreground text-center mb-8 text-sm">
          A day full of inspiring talks and performances
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-3">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-card/50 border border-border rounded-lg transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group"
            >
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:text-primary-foreground transition-colors" />
              <div>
                <p className="text-xs text-primary font-semibold mb-0.5 group-hover:text-primary-foreground transition-colors">
                  {item.time}
                </p>
                <h3 className="text-sm font-semibold group-hover:text-primary-foreground transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;

import { Clock, Mic, Coffee, Utensils, Music, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

type ScheduleItem = {
  time: string;
  title: string;
  type: "talk" | "ceremony" | "break" | "performance" | "meal";
};

const scheduleItems: ScheduleItem[] = [
  {
    time: "8:30 - 09:00 AM",
    title: "Registration & Welcome Reception",
    type: "ceremony",
  },
  { time: "9:00 - 09:40 AM", title: "Inauguration Ceremony", type: "ceremony" },
  { time: "9:45 - 10:10 AM", title: "Talk 1 - Prachi Pratap", type: "talk" },
  { time: "10:10 - 10:35 AM", title: "Talk 2 - Samir Ahsan", type: "talk" },
  { time: "10:35 - 11:00 AM", title: "Talk 3 - Mansi Chaudhary", type: "talk" },
  { time: "11:00 - 11:30 AM", title: "High Tea Break", type: "break" },
  {
    time: "11:30 - 12:00 PM",
    title: "Performance By Noor Mohammad",
    type: "performance",
  },
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

const Schedule = () => {
  const { ref, isVisible } = useScrollAnimation();
  const tedxRed = "#E62B1E";

  return (
    <section
      id="schedule"
      ref={ref}
      className="py-28 md:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* 🔴 Red Glow Background (same as FAQ / Sponsors / Contact / Location) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#E62B1E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E62B1E] rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* 🕒 Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center mb-4">
            <Clock className="w-10 h-10 text-[#E62B1E] mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Event <span className="text-[#E62B1E]">Schedule</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            A day full of inspiring talks, performances, and unforgettable
            moments
          </p>
        </div>

        {/* 🧾 Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#E62B1E]/40"></div>

          <div className="space-y-5">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 80}ms` : "0ms",
                  animationFillMode: "forwards",
                }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-3.5 h-3.5 rounded-full bg-[#E62B1E] border-4 border-black shadow-md z-10"></div>

                {/* Schedule Card */}
                <Card className="ml-0 md:ml-16 bg-[#111]/80 backdrop-blur-md border border-[#222] rounded-xl transition-all duration-500 hover:border-[#E62B1E]/50 hover:shadow-[0_0_25px_#E62B1E33] hover:translate-x-1">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E62B1E]/10 flex items-center justify-center text-[#E62B1E]">
                        {getIcon(item.type)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <p className="text-sm font-semibold text-[#E62B1E]">
                            {item.time}
                          </p>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E62B1E]/10 text-[#E62B1E] border border-[#E62B1E]/30">
                            {item.type.charAt(0).toUpperCase() +
                              item.type.slice(1)}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">
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
    </section>
  );
};

export default Schedule;

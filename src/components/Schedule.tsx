import { Clock, ChevronRight } from "lucide-react";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "6:00 AM", name: "Sunrise Vinyasa", instructor: "Maya Chen", duration: "60 min" },
      { time: "9:00 AM", name: "Gentle Hatha", instructor: "David Okafor", duration: "75 min" },
      { time: "12:00 PM", name: "Lunch Flow", instructor: "Sofia Rivera", duration: "60 min" },
      { time: "5:30 PM", name: "Hot Yoga", instructor: "Maya Chen", duration: "60 min" },
      { time: "7:00 PM", name: "Yin & Restore", instructor: "Ava Lindqvist", duration: "75 min" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "6:00 AM", name: "Power Vinyasa", instructor: "Sofia Rivera", duration: "60 min" },
      { time: "9:30 AM", name: "Prenatal Yoga", instructor: "Ava Lindqvist", duration: "60 min" },
      { time: "12:00 PM", name: "Meditation", instructor: "David Okafor", duration: "45 min" },
      { time: "5:30 PM", name: "Vinyasa Flow", instructor: "Maya Chen", duration: "60 min" },
      { time: "7:15 PM", name: "Yin Yoga", instructor: "David Okafor", duration: "75 min" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "6:00 AM", name: "Sunrise Vinyasa", instructor: "Sofia Rivera", duration: "60 min" },
      { time: "9:00 AM", name: "Hatha Basics", instructor: "David Okafor", duration: "75 min" },
      { time: "12:00 PM", name: "Lunch Flow", instructor: "Maya Chen", duration: "60 min" },
      { time: "5:30 PM", name: "Hot Yoga", instructor: "Sofia Rivera", duration: "60 min" },
      { time: "7:00 PM", name: "Meditation", instructor: "Ava Lindqvist", duration: "45 min" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "6:00 AM", name: "Power Vinyasa", instructor: "Maya Chen", duration: "60 min" },
      { time: "9:30 AM", name: "Prenatal Yoga", instructor: "Ava Lindqvist", duration: "60 min" },
      { time: "12:00 PM", name: "Hatha Flow", instructor: "David Okafor", duration: "75 min" },
      { time: "5:30 PM", name: "Vinyasa Flow", instructor: "Sofia Rivera", duration: "60 min" },
      { time: "7:15 PM", name: "Yin & Restore", instructor: "David Okafor", duration: "75 min" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "6:00 AM", name: "Sunrise Vinyasa", instructor: "Maya Chen", duration: "60 min" },
      { time: "9:00 AM", name: "Gentle Hatha", instructor: "Ava Lindqvist", duration: "75 min" },
      { time: "12:00 PM", name: "Meditation", instructor: "David Okafor", duration: "45 min" },
      { time: "5:30 PM", name: "Hot Yoga", instructor: "Sofia Rivera", duration: "60 min" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "8:00 AM", name: "Weekend Vinyasa", instructor: "Maya Chen", duration: "75 min" },
      { time: "10:00 AM", name: "Hot Yoga", instructor: "Sofia Rivera", duration: "60 min" },
      { time: "12:00 PM", name: "Community Meditation", instructor: "David Okafor", duration: "60 min" },
      { time: "2:00 PM", name: "Yin Yoga", instructor: "Ava Lindqvist", duration: "75 min" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "9:00 AM", name: "Slow Flow", instructor: "Ava Lindqvist", duration: "75 min" },
      { time: "11:00 AM", name: "Hatha & Meditation", instructor: "David Okafor", duration: "90 min" },
      { time: "2:00 PM", name: "Restorative Yin", instructor: "Maya Chen", duration: "75 min" },
    ],
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 lg:py-28 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sage-500 font-semibold text-sm uppercase tracking-wider">
            Weekly Schedule
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mt-3 mb-5">
            Plan Your Practice
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed">
            Over 50 classes per week to fit your schedule. From early morning
            flows to evening restoration sessions.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {schedule.slice(0, 6).map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-2xl border border-sage-100 overflow-hidden"
            >
              <div className="bg-sage-600 px-6 py-3">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                  {day.day}
                </h3>
              </div>
              <div className="p-4">
                {day.classes.map((cls, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-sage-50 last:border-0"
                  >
                    <div className="flex items-center gap-1.5 text-sage-500 min-w-[80px]">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{cls.time}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-sage-800 truncate">
                        {cls.name}
                      </p>
                      <p className="text-xs text-sage-500">
                        {cls.instructor} &middot; {cls.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sunday + CTA */}
        <div className="mt-5 bg-white rounded-2xl border border-sage-100 overflow-hidden max-w-md mx-auto">
          <div className="bg-sage-600 px-6 py-3">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
              Sunday
            </h3>
          </div>
          <div className="p-4">
            {schedule[6].classes.map((cls, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3 border-b border-sage-50 last:border-0"
              >
                <div className="flex items-center gap-1.5 text-sage-500 min-w-[80px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">{cls.time}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-sage-800 truncate">
                    {cls.name}
                  </p>
                  <p className="text-xs text-sage-500">
                    {cls.instructor} &middot; {cls.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage-600 text-white font-semibold rounded-full hover:bg-sage-700 transition-colors"
          >
            View Full Schedule
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

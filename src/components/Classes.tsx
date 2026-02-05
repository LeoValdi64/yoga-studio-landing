import {
  Wind,
  Sun,
  Flame,
  Moon,
  Heart,
  Brain,
} from "lucide-react";

const classes = [
  {
    name: "Vinyasa Flow",
    icon: Wind,
    level: "All Levels",
    duration: "60 min",
    description:
      "A dynamic, breath-synchronized practice that links movement and breath together in a flowing sequence. Build strength, flexibility, and inner calm.",
    color: "bg-sage-500",
  },
  {
    name: "Hatha Yoga",
    icon: Sun,
    level: "Beginner Friendly",
    duration: "75 min",
    description:
      "A gentle, foundational practice focusing on basic postures and breathing techniques. Perfect for those new to yoga or seeking a slower, more deliberate practice.",
    color: "bg-sage-600",
  },
  {
    name: "Hot Yoga",
    icon: Flame,
    level: "Intermediate",
    duration: "60 min",
    description:
      "Practice in a heated room to deepen flexibility and promote detoxification. A challenging and invigorating experience that leaves you feeling renewed.",
    color: "bg-amber-600",
  },
  {
    name: "Yin Yoga",
    icon: Moon,
    level: "All Levels",
    duration: "75 min",
    description:
      "A slow, meditative practice targeting deep connective tissues. Hold poses for extended periods to increase flexibility and cultivate mindful awareness.",
    color: "bg-indigo-400",
  },
  {
    name: "Prenatal Yoga",
    icon: Heart,
    level: "All Trimesters",
    duration: "60 min",
    description:
      "Specially designed for expecting mothers. Gentle poses, breathing exercises, and relaxation techniques to support a healthy and comfortable pregnancy.",
    color: "bg-rose-400",
  },
  {
    name: "Meditation",
    icon: Brain,
    level: "All Levels",
    duration: "45 min",
    description:
      "Guided meditation sessions to quiet the mind, reduce stress, and cultivate a deeper sense of inner peace. Various techniques including mindfulness and loving-kindness.",
    color: "bg-violet-400",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sage-500 font-semibold text-sm uppercase tracking-wider">
            Our Offerings
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mt-3 mb-5">
            Classes for Every Journey
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed">
            Whether you are a seasoned practitioner or stepping onto the mat for
            the first time, we have a class that is perfect for you.
          </p>
        </div>

        {/* Class Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {classes.map((cls) => {
            const Icon = cls.icon;
            return (
              <div
                key={cls.name}
                className="group bg-cream-50 rounded-2xl p-7 border border-sage-100 hover:border-sage-300 transition-all hover:shadow-lg hover:shadow-sage-100/50 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 ${cls.color} rounded-xl text-white mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-sage-900 mb-2">
                  {cls.name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-sage-600 bg-sage-100 px-2.5 py-1 rounded-full">
                    {cls.level}
                  </span>
                  <span className="text-xs font-medium text-sage-500">
                    {cls.duration}
                  </span>
                </div>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {cls.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

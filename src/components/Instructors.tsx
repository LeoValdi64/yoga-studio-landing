import { Award, BookOpen, Users, Sparkles } from "lucide-react";

const instructors = [
  {
    name: "Maya Chen",
    role: "Studio Founder & Lead Instructor",
    specialties: ["Vinyasa Flow", "Hot Yoga", "Teacher Training"],
    experience: "15 years",
    bio: "Maya founded ZenFlow Yoga with a vision of creating an inclusive space where movement and mindfulness converge. Trained in Rishikesh, India, she brings an authentic and deeply personal approach to every class.",
    icon: Sparkles,
    certifications: "E-RYT 500, YACEP",
  },
  {
    name: "David Okafor",
    role: "Senior Instructor & Meditation Guide",
    specialties: ["Hatha", "Yin Yoga", "Meditation"],
    experience: "12 years",
    bio: "David combines his background in mindfulness psychology with traditional Hatha principles. His meditation sessions are transformative, guiding students toward deep inner stillness and clarity.",
    icon: BookOpen,
    certifications: "E-RYT 500, Certified Meditation Teacher",
  },
  {
    name: "Sofia Rivera",
    role: "Vinyasa & Hot Yoga Instructor",
    specialties: ["Power Vinyasa", "Hot Yoga", "Breathwork"],
    experience: "8 years",
    bio: "Sofia brings energy and joy to every class. Her creative sequencing and infectious enthusiasm make challenging practices feel accessible and fun. Former competitive dancer, she brings grace to every flow.",
    icon: Award,
    certifications: "RYT 500, Breathwork Facilitator",
  },
  {
    name: "Ava Lindqvist",
    role: "Restorative & Prenatal Specialist",
    specialties: ["Prenatal Yoga", "Yin Yoga", "Restorative"],
    experience: "10 years",
    bio: "Ava is passionate about creating safe, nurturing spaces for healing and growth. Her gentle approach and extensive prenatal training make her a trusted guide for expecting mothers and those seeking restoration.",
    icon: Users,
    certifications: "RYT 500, RPYT, Restorative Yoga Certified",
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sage-500 font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mt-3 mb-5">
            Meet Your Guides
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed">
            Our experienced and certified instructors are dedicated to supporting
            your unique journey on and off the mat.
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {instructors.map((instructor) => {
            const Icon = instructor.icon;
            return (
              <div
                key={instructor.name}
                className="group bg-cream-50 rounded-2xl p-8 border border-sage-100 hover:border-sage-300 transition-all hover:shadow-lg hover:shadow-sage-100/50"
              >
                <div className="flex items-start gap-5">
                  {/* Avatar Placeholder */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-sage-900">
                      {instructor.name}
                    </h3>
                    <p className="text-sage-600 text-sm font-medium mt-0.5">
                      {instructor.role}
                    </p>
                    <p className="text-sage-500 text-xs mt-1">
                      {instructor.certifications} &middot; {instructor.experience}
                    </p>
                  </div>
                </div>

                <p className="text-sage-600 text-sm leading-relaxed mt-5">
                  {instructor.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {instructor.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium text-sage-700 bg-sage-100 px-3 py-1.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

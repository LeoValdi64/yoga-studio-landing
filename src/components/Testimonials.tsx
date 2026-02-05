import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rachel M.",
    location: "Boulder, CO",
    rating: 5,
    text: "ZenFlow has completely transformed my relationship with yoga. Maya's Vinyasa classes are the highlight of my week. The studio has such a warm, welcoming energy that makes you want to come back every single day.",
    memberSince: "Member since 2021",
  },
  {
    name: "James T.",
    location: "Louisville, CO",
    rating: 5,
    text: "As someone who was intimidated by yoga, David's Hatha classes were the perfect starting point. His patience and clear instruction helped me build a practice I never thought I'd have. Truly life-changing.",
    memberSince: "Member since 2022",
  },
  {
    name: "Priya K.",
    location: "Boulder, CO",
    rating: 5,
    text: "The prenatal classes with Ava were invaluable during my pregnancy. She created such a safe, supportive environment. I felt stronger, more balanced, and better prepared for birth. Cannot recommend enough.",
    memberSince: "Member since 2023",
  },
  {
    name: "Marcus L.",
    location: "Superior, CO",
    rating: 5,
    text: "The Hot Yoga classes are incredible. Sofia pushes you just the right amount while keeping the practice accessible. I've tried studios all over Boulder and ZenFlow is hands-down the best in terms of quality and community.",
    memberSince: "Member since 2020",
  },
  {
    name: "Elena W.",
    location: "Broomfield, CO",
    rating: 5,
    text: "The meditation sessions have been a game-changer for my anxiety. I drive 30 minutes to get here because no other studio comes close. The space is beautiful, the instructors are genuine, and the community is like family.",
    memberSince: "Member since 2021",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sage-500 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mt-3 mb-5">
            What Our Community Says
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed">
            Do not just take our word for it. Here is what our yogis have to say
            about their experience at ZenFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-cream-50 rounded-2xl p-7 border border-sage-100 hover:border-sage-200 transition-all ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-sage-300 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sage-700 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-sage-100">
                <div className="w-10 h-10 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sage-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-sage-500 text-xs">
                    {testimonial.location} &middot; {testimonial.memberSince}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-sage-50 rounded-2xl border border-sage-100">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-500 fill-amber-500"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-sage-900 text-sm">
                4.9 out of 5 stars
              </p>
              <p className="text-sage-500 text-xs">
                Based on 200+ reviews on Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

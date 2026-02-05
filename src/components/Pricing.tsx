import { Check, Zap, Crown, Gem } from "lucide-react";

const plans = [
  {
    name: "Drop-in",
    icon: Zap,
    price: "$22",
    period: "per class",
    description: "Perfect for visitors or occasional practitioners. No commitment, just flow.",
    features: [
      "Single class access",
      "All class types included",
      "Mat rental available",
      "Locker room access",
      "First class free for new students",
    ],
    cta: "Book a Class",
    popular: false,
  },
  {
    name: "Monthly Unlimited",
    icon: Crown,
    price: "$149",
    period: "per month",
    description: "Our most popular plan. Unlimited access for dedicated practitioners.",
    features: [
      "Unlimited classes",
      "All class types included",
      "Free mat storage",
      "Guest passes (2 per month)",
      "10% off workshops & retreats",
      "Priority booking access",
      "Complimentary tea bar",
    ],
    cta: "Start Monthly",
    popular: true,
  },
  {
    name: "Annual Membership",
    icon: Gem,
    price: "$119",
    period: "per month (billed annually)",
    description: "The best value for committed yogis. Save over $360 per year.",
    features: [
      "Unlimited classes",
      "All class types included",
      "Free mat storage",
      "Guest passes (4 per month)",
      "20% off workshops & retreats",
      "Priority booking access",
      "Complimentary tea bar",
      "Free annual workshop admission",
      "Exclusive member events",
    ],
    cta: "Go Annual",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sage-500 font-semibold text-sm uppercase tracking-wider">
            Simple Pricing
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mt-3 mb-5">
            Invest in Your Wellbeing
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed">
            Flexible plans designed to support your practice. Start with a free
            class and find the perfect fit for your journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border transition-all hover:shadow-lg ${
                  plan.popular
                    ? "bg-sage-700 border-sage-600 text-white shadow-xl shadow-sage-700/20 scale-[1.02] md:scale-105"
                    : "bg-white border-sage-100 hover:border-sage-300 hover:shadow-sage-100/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.popular ? "bg-white/20" : "bg-sage-100"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        plan.popular ? "text-white" : "text-sage-600"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-[family-name:var(--font-heading)] text-xl font-bold ${
                      plan.popular ? "text-white" : "text-sage-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span
                    className={`font-[family-name:var(--font-heading)] text-4xl font-bold ${
                      plan.popular ? "text-white" : "text-sage-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.popular ? "text-sage-200" : "text-sage-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    plan.popular ? "text-sage-200" : "text-sage-600"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-sage-300" : "text-sage-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-sage-100" : "text-sage-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center px-6 py-3.5 font-semibold rounded-full transition-all ${
                    plan.popular
                      ? "bg-white text-sage-700 hover:bg-cream-50 shadow-md"
                      : "bg-sage-600 text-white hover:bg-sage-700"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-sage-500 text-sm mt-10">
          All plans include access to our changing rooms, showers, and filtered
          water station. Cancel anytime with 30 days notice.
        </p>
      </div>
    </section>
  );
}

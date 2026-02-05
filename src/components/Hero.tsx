import { ArrowDown, MapPin, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-sage-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-100/20 rounded-full blur-3xl" />
        {/* Subtle pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-sage-900" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-sage-200 mb-8">
          <MapPin className="w-4 h-4 text-sage-600" />
          <span className="text-sm font-medium text-sage-700">Boulder, Colorado</span>
          <span className="text-sage-300">|</span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-sage-700">4.9</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-sage-900 leading-[1.05] tracking-tight mb-6">
          Find Your
          <span className="block text-sage-600 italic">Inner Flow</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-sage-700/80 leading-relaxed mb-10">
          Welcome to ZenFlow Yoga, where movement meets mindfulness. Discover a
          sanctuary of calm in the heart of Boulder with classes designed for every
          body and every level.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="px-8 py-4 bg-sage-600 text-white font-semibold rounded-full hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 hover:shadow-xl hover:shadow-sage-600/30 hover:-translate-y-0.5"
          >
            Start Your Journey
          </a>
          <a
            href="#classes"
            className="px-8 py-4 bg-white/80 text-sage-700 font-semibold rounded-full hover:bg-white transition-all border border-sage-200 hover:border-sage-300 hover:-translate-y-0.5"
          >
            Explore Classes
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div>
            <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-sage-800">12+</div>
            <div className="text-sm text-sage-600 mt-1">Years of Practice</div>
          </div>
          <div>
            <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-sage-800">50+</div>
            <div className="text-sm text-sage-600 mt-1">Weekly Classes</div>
          </div>
          <div>
            <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-sage-800">3k+</div>
            <div className="text-sm text-sage-600 mt-1">Happy Yogis</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#classes" aria-label="Scroll to classes">
            <ArrowDown className="w-5 h-5 text-sage-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

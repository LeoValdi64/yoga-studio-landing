import { Leaf, Heart, Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  classes: [
    { label: "Vinyasa Flow", href: "#classes" },
    { label: "Hatha Yoga", href: "#classes" },
    { label: "Hot Yoga", href: "#classes" },
    { label: "Yin Yoga", href: "#classes" },
    { label: "Prenatal", href: "#classes" },
    { label: "Meditation", href: "#classes" },
  ],
  studio: [
    { label: "Our Story", href: "#" },
    { label: "Instructors", href: "#instructors" },
    { label: "Schedule", href: "#schedule" },
    { label: "Pricing", href: "#pricing" },
    { label: "Workshops", href: "#" },
    { label: "Teacher Training", href: "#" },
  ],
  connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Careers", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Gift Cards", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-sage-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <Leaf className="w-6 h-6 text-sage-400" />
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                ZenFlow <span className="font-normal text-sage-400">Yoga</span>
              </span>
            </a>
            <p className="text-sage-400 text-sm leading-relaxed max-w-xs mb-6">
              A sanctuary for movement and mindfulness in the heart of Boulder,
              Colorado. Cultivating peace, strength, and community since 2013.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-sage-800 rounded-full flex items-center justify-center hover:bg-sage-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-sage-800 rounded-full flex items-center justify-center hover:bg-sage-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-sage-800 rounded-full flex items-center justify-center hover:bg-sage-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Classes
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.classes.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-sage-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.studio.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-sage-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-sage-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-sage-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sage-500 text-xs">
            2024 ZenFlow Yoga. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sage-500 text-xs">
            Made with <Heart className="w-3 h-3 text-sage-500" /> in Boulder, CO
          </p>
        </div>
      </div>
    </footer>
  );
}

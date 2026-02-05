"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  CalendarDays,
} from "lucide-react";

const classOptions = [
  "Vinyasa Flow",
  "Hatha Yoga",
  "Hot Yoga",
  "Yin Yoga",
  "Prenatal Yoga",
  "Meditation",
  "Not sure yet — help me choose!",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sage-500 font-semibold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mt-3 mb-5">
            Book Your First Class
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed">
            Ready to begin your journey? Fill out the form below and we will get
            you set up with the perfect class. Your first session is on us.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-sage-100 p-12 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-sage-900 mb-3">
                  Namaste! We Got Your Message
                </h3>
                <p className="text-sage-600 max-w-md mx-auto">
                  Thank you for reaching out. One of our team members will be in
                  touch within 24 hours to help you get started on your journey.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-sage-100 p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="flex items-center gap-2 text-sm font-medium text-sage-800 mb-2"
                    >
                      <User className="w-4 h-4 text-sage-500" />
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-xl text-sage-900 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                      placeholder="Your first name"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="flex items-center gap-2 text-sm font-medium text-sage-800 mb-2"
                    >
                      <User className="w-4 h-4 text-sage-500" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-xl text-sage-900 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                      placeholder="Your last name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-medium text-sage-800 mb-2"
                    >
                      <Mail className="w-4 h-4 text-sage-500" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-xl text-sage-900 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-2 text-sm font-medium text-sage-800 mb-2"
                    >
                      <Phone className="w-4 h-4 text-sage-500" />
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-xl text-sage-900 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                      placeholder="(303) 555-0123"
                    />
                  </div>

                  {/* Class Interest */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="classInterest"
                      className="flex items-center gap-2 text-sm font-medium text-sage-800 mb-2"
                    >
                      <CalendarDays className="w-4 h-4 text-sage-500" />
                      Class Interest
                    </label>
                    <select
                      id="classInterest"
                      name="classInterest"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-xl text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a class type</option>
                      {classOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-sm font-medium text-sage-800 mb-2"
                    >
                      <MessageSquare className="w-4 h-4 text-sage-500" />
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-xl text-sage-900 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your experience level, any injuries, or questions you have..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sage-600 text-white font-semibold rounded-full hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 hover:shadow-xl hover:shadow-sage-600/30"
                >
                  <Send className="w-4 h-4" />
                  Send & Book My Free Class
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location */}
            <div className="bg-white rounded-2xl border border-sage-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800 mb-1">Visit Us</h4>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    1847 Pearl Street, Suite 200
                    <br />
                    Boulder, CO 80302
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl border border-sage-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800 mb-1">Call Us</h4>
                  <p className="text-sage-600 text-sm">(303) 555-YOGA (9642)</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl border border-sage-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800 mb-1">Email Us</h4>
                  <p className="text-sage-600 text-sm">hello@zenflow-yoga.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-sage-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800 mb-1">Studio Hours</h4>
                  <div className="text-sage-600 text-sm space-y-1">
                    <p>Mon - Fri: 5:30 AM - 9:00 PM</p>
                    <p>Saturday: 7:00 AM - 5:00 PM</p>
                    <p>Sunday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Classes from "@/components/Classes";
import Schedule from "@/components/Schedule";
import Instructors from "@/components/Instructors";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Classes />
        <Schedule />
        <Instructors />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

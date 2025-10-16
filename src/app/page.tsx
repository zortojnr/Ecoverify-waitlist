import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WaitlistForm from "@/components/WaitlistForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <WaitlistForm />
      <Testimonials />
      <Footer />
    </main>
  );
}

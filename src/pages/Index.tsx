import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import BagGallery from "@/components/BagGallery";
import Instructor from "@/components/Instructor";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BlackFridayRibbon from "@/components/BlackFridayRibbon";

const Index = () => {
  return (
    <div className="black-friday-theme min-h-screen bg-background font-montserrat">
      <BlackFridayRibbon />
      <Hero />
      <BagGallery />
      <Plans />
      <Instructor />
      <Benefits />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

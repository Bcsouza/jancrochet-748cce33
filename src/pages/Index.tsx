import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import BagGallery from "@/components/BagGallery";
import Instructor from "@/components/Instructor";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="black-friday-theme min-h-screen bg-background font-montserrat">
      <div className="bg-campaign text-campaign-foreground px-4 py-3 text-center text-sm font-semibold">
        BLACK FRIDAY JanCrochet <span className="text-campaign-accent">·</span> Bolsas avulsas R$ 60 <span className="text-campaign-accent">·</span> Curso completo R$ 299
      </div>
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

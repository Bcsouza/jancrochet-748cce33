import Hero from "@/components/Hero";
import BagGallery from "@/components/BagGallery";
import Benefits from "@/components/Benefits";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Hero />
      <BagGallery />
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

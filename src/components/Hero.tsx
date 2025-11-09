import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";
const Hero = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    ctaSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Crochê artesanal" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center animate-fade-up">
        <div className="mb-8">
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            JanCrochet
            <span className="block text-primary mt-2">Bolsas Exclusivas</span>
          </h1>
        </div>

        <p className="font-montserrat text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-200">
          Aprenda a criar bolsas de crochê únicas e exclusivas com o curso JanCrochet.
          <span className="block mt-2 font-medium text-foreground">
            Transforme fios em arte e conquiste sua renda com elegância.
          </span>
        </p>

        <Button asChild size="lg" className="font-montserrat font-semibold text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-400">
          <a href="https://pay.kiwify.com.br/iBXyKqe" target="_blank" rel="noopener noreferrer">
            Eu quero isso! 🧶
          </a>
        </Button>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))" fillOpacity="0.8" />
        </svg>
      </div>
    </section>;
};
export default Hero;
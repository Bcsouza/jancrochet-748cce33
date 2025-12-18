import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    fbq: (track: string, event: string, data?: { value: number; currency: string }) => void;
  }
}

const FinalCTA = () => {
  const handlePurchaseClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', { value: 387, currency: 'BRL' });
    }
    window.open('https://pay.kiwify.com.br/iBXyKqe', '_blank');
  };

  return (
    <section id="cta-section" className="py-20 px-6 bg-gradient-elegant relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="animate-fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            As bolsas que encantam estão a um passo de você aprender a fazer
          </h2>
          <p className="font-montserrat text-lg md:text-xl text-muted-foreground mb-10">
            Garanta sua vaga e comece a criar bolsas exclusivas
          </p>
        </div>

        <div className="animate-scale-in animation-delay-200">
          <Button 
            size="lg"
            className="font-montserrat font-semibold text-lg px-12 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105"
            onClick={handlePurchaseClick}
          >
            Eu quero isso! 🧶
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in animation-delay-400">
          <p className="font-montserrat text-sm text-muted-foreground">
            ✨ Mais de <span className="font-semibold text-foreground">100 pessoas</span> já garantiram sua vaga
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

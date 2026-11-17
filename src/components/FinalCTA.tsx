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
    <section id="cta-section" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-elegant relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto text-center px-2">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase text-primary mb-4">Black Friday · JanCrochet</p>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Seu próximo passo: criar as 9 bolsas exclusivas
          </h2>
          <p className="font-montserrat text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10">
            Nesta Black Friday, escolha o Curso Completo por R$ 299 e transforme sua vontade de criar em peças de verdade.
          </p>
        </div>

        <div className="animate-scale-in animation-delay-200">
          <Button 
            size="lg"
            className="font-montserrat font-semibold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            onClick={handlePurchaseClick}
          >
            Quero o curso por R$ 299
          </Button>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50 animate-fade-in animation-delay-400">
          <p className="font-montserrat text-xs md:text-sm text-muted-foreground">
            ✨ Mais de <span className="font-semibold text-foreground">100 pessoas</span> já garantiram sua vaga
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

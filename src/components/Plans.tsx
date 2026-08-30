import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

declare global {
  interface Window {
    fbq: (track: string, event: string, data?: { value: number; currency: string }) => void;
  }
}

const Plans = () => {
  const handleClick = (url: string, event: string, value: number) => {
    if (window.fbq) {
      window.fbq('track', event, { value, currency: 'BRL' });
    }
    window.open(url, '_blank');
  };

  return (
    <section id="planos" className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14 animate-fade-up">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Planos
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Escolha como quer aprender e fazer parte da nossa comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 - Curso Completo */}
          <div className="animate-fade-up bg-gradient-to-r from-primary/10 via-secondary to-primary/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 shadow-soft flex flex-col">
            <div className="inline-block self-start bg-primary/20 text-primary px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-montserrat font-semibold mb-4">
              ✨ Mais completo
            </div>
            <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Curso Completo - Todas as 9 Bolsas
            </h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6">
              <span className="font-montserrat text-xl md:text-2xl text-muted-foreground line-through">
                R$ 810
              </span>
              <span className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                R$ 399
              </span>
            </div>
            <ul className="font-montserrat text-sm md:text-base text-muted-foreground space-y-3 mb-8">
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Todas as 9 bolsas do curso, com acesso vitalício</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Suporte exclusivo</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Agente Jancrochet VITALÍCIO incluso: comunidade no Telegram com dica e inspiração nova todo dia, pra sempre e sem mensalidade</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="font-montserrat text-base md:text-lg px-6 md:px-10 py-5 md:py-6 rounded-full shadow-hover hover:scale-105 transition-transform mt-auto w-full"
              onClick={() => handleClick('https://pay.kiwify.com.br/SEU-LINK-DO-COMBO', 'Purchase', 399)}
            >
              Quero o Curso Completo
            </Button>
          </div>

          {/* Card 2 - Clube */}
          <div className="animate-fade-up animation-delay-200 bg-gradient-to-r from-primary/10 via-secondary to-primary/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 shadow-soft flex flex-col">
            <div className="inline-block self-start bg-primary/20 text-primary px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-montserrat font-semibold mb-4">
              Novidade
            </div>
            <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Só o Clube Jancrochet
            </h3>
            <div className="mb-6">
              <div className="flex items-end gap-2">
                <span className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  R$ 29,99
                </span>
                <span className="font-montserrat text-base md:text-lg text-muted-foreground mb-1">
                  /mês
                </span>
              </div>
              <p className="font-montserrat text-xs md:text-sm text-muted-foreground mt-2">
                Cancele quando quiser
              </p>
            </div>
            <ul className="font-montserrat text-sm md:text-base text-muted-foreground space-y-3 mb-8">
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Comunidade fechada no Telegram</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Uma receita ou inspiração nova todo dia</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Tire dúvidas quando travar num ponto</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Lives de tira-dúvidas todo mês</span>
              </li>
            </ul>
            <Button
              size="lg"
              variant="outline"
              className="font-montserrat text-base md:text-lg px-6 md:px-10 py-5 md:py-6 rounded-full hover:bg-primary hover:text-primary-foreground transition-all mt-auto w-full"
              onClick={() => handleClick('https://pay.kiwify.com.br/SEU-LINK-DA-ASSINATURA', 'Subscribe', 29.99)}
            >
              Assinar o Clube 🧶
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

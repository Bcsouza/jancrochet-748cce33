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
          <p className="text-primary text-sm font-semibold uppercase mb-3">Black Friday JanCrochet</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apaixonou por mais de uma? Aprenda todas.
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Garanta o curso completo ou escolha a inspiração diária no Telegram. Duas ofertas independentes, para momentos diferentes da sua jornada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 - Curso Completo */}
          <div className="bf-featured animate-fade-up bg-campaign text-campaign-foreground rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 shadow-soft flex flex-col h-full">
            <div className="inline-block self-start bg-primary/20 text-primary px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-montserrat font-semibold mb-4">
              BLACK FRIDAY · CURSO COMPLETO
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-3">
              Curso Completo — Todas as 9 Bolsas
            </h3>
            <p className="font-montserrat text-sm md:text-base text-muted-foreground mb-6">
              Aprenda a fazer 9 bolsas exclusivas, do zero, e comece a vender suas próprias peças.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6">
              <span className="font-montserrat text-xl md:text-2xl text-muted-foreground line-through">
                R$ 540
              </span>
              <span className="font-playfair text-4xl md:text-5xl font-bold text-primary">
                R$ 299
              </span>
            </div>
            <p className="text-sm font-semibold text-primary mb-6">Economize R$ 241 em relação às 9 aulas avulsas</p>
            <ul className="font-montserrat text-sm md:text-base text-muted-foreground space-y-3 mb-8">
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>As 9 bolsas do curso, passo a passo, com acesso VITALÍCIO</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Suporte exclusivo pra você nunca travar</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Aprenda a fazer peças bonitas o suficiente pra vender</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="font-montserrat text-sm md:text-base px-4 md:px-6 min-h-12 h-auto py-4 whitespace-normal rounded-full shadow-hover transition-transform mt-auto w-full sm:w-auto"
              onClick={() => handleClick('https://pay.kiwify.com.br/iBXyKqe', 'Purchase', 299)}
            >
              GARANTIR AS 9 BOLSAS · R$ 299
            </Button>
          </div>

          {/* Card 2 - Crochê News */}
          <div className="animate-fade-up animation-delay-200 bg-gradient-to-r from-primary/10 via-secondary to-primary/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 shadow-soft flex flex-col h-full">
            <div className="inline-block self-start bg-primary/20 text-primary px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-montserrat font-semibold mb-4">
              INSPIRAÇÃO NO TELEGRAM
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-3">
              Crochê News
            </h3>
            <p className="font-montserrat text-sm md:text-base text-muted-foreground mb-6">
              Nunca mais fique sem ideia. Uma receita nova todo dia, direto no seu Telegram.
            </p>
            <div className="mb-6">
              <div className="flex flex-wrap items-end gap-2">
                <span className="font-playfair text-4xl md:text-5xl font-bold text-primary">
                  R$ 32,99
                </span>
                <span className="font-montserrat text-base md:text-lg text-muted-foreground mb-1">
                  /mês
                </span>
              </div>
              <p className="font-montserrat text-xs md:text-sm text-muted-foreground mt-2">
                Cancele quando quiser
              </p>
            </div>
            <ul className="font-montserrat text-sm md:text-base text-muted-foreground space-y-3 mb-4">
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Todo dia uma receita nova de crochê, selecionada de blogs, sites e criadores do mundo todo</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>As novidades e tendências do mundo do crochê</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Comunidade fechada onde as alunas conversam entre si</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span>Mande fotos das suas criações e tire dúvidas com as outras alunas</span>
              </li>
            </ul>
            <p className="font-montserrat text-xs md:text-sm text-muted-foreground mb-8">
              O Crochê News é um serviço de curadoria: as receitas são selecionadas de fontes externas e levam você direto ao site original de cada autor.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="font-montserrat text-sm md:text-base px-4 md:px-6 min-h-12 h-auto py-4 whitespace-normal rounded-full hover:bg-primary hover:text-primary-foreground transition-all mt-auto w-full sm:w-auto"
              onClick={() => handleClick('https://pay.kiwify.com.br/3GQtvXU', 'Subscribe', 32.99)}
            >
              ASSINAR O CLUBE 🧶
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

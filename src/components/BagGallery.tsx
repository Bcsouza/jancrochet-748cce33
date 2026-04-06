import bagAlice from "@/assets/bag-alice.jpg";
import bagLolla from "@/assets/bag-lolla.jpg";
import bagTiffany from "@/assets/bag-tiffany.jpg";
import bagPenelope from "@/assets/bag-penelope.jpg";
import bagColmeia from "@/assets/bag-colmeia.jpeg";
import bagBeatriz from "@/assets/bag-beatriz.jpeg";
import bagAurora from "@/assets/bag-aurora.jpeg";
import bagCharlotte from "@/assets/bag-charlotte.png";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    fbq: (track: string, event: string, data?: { value: number; currency: string }) => void;
  }
}

const BagGallery = () => {
  const handlePurchaseClick = (url: string, value: number) => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', { value, currency: 'BRL' });
    }
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-up">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Criações Exclusivas
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Bolsas artesanais que serão ensinadas no curso que unem técnica, elegância e sofisticação
          </p>
        </div>

        {/* Individual Bags */}
        <div className="text-center mb-8">
          <p className="font-montserrat text-muted-foreground">
            Compre as bolsas individualmente:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Bolsa Charlotte */}
          <div className="group animate-fade-up">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagCharlotte} 
                alt="Bolsa Charlotte - Bolsa de crochê verde oliva com corrente dourada" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Bolsa Charlotte
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Estilo clássico e atemporal
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat text-sm md:text-base rounded-full px-4 md:px-6 hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
                onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/r1ELM3S', 90)}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Bolsa Aurora */}
          <div className="group animate-fade-up animation-delay-200">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagAurora} 
                alt="Bolsa Aurora - Bolsa de crochê colorida em tons de laranja e lilás" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Bolsa Aurora
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Cores vibrantes e alegria
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat text-sm md:text-base rounded-full px-4 md:px-6 hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
                onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/VoYrghq', 90)}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Clutch Beatriz */}
          <div className="group animate-fade-up animation-delay-400">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagBeatriz} 
                alt="Clutch Beatriz - Bolsa de crochê com trançado delicado e franjas douradas" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Clutch Beatriz
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Delicadeza e sofisticação
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat text-sm md:text-base rounded-full px-4 md:px-6 hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
                onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/Jn9lzdz', 90)}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Bolsa Colmeia */}
          <div className="group animate-fade-up animation-delay-400">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagColmeia} 
                alt="Bolsa Colmeia - Bolsa de crochê com trançado delicado" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Bolsa Colmeia
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Textura única e diferenciada
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat text-sm md:text-base rounded-full px-4 md:px-6 hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
                onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/7GFtmZf', 90)}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Bag Alice */}
          <div className="group animate-fade-up animation-delay-600">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagAlice} 
                alt="Bolsa Alice - Bolsa de crochê azul com lenço elegante" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Bolsa Alice
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Elegância em tons de azul
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat text-sm md:text-base rounded-full px-4 md:px-6 hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
                onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/4D9x4SZ', 90)}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Bag Lolla */}
          <div className="group animate-fade-up animation-delay-800">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagLolla} 
                alt="Bolsa Lolla - Bolsa de crochê artesanal em tons naturais" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Bolsa Lolla
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Sofisticação artesanal
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat text-sm md:text-base rounded-full px-4 md:px-6 hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
                onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/NRmkgUg', 90)}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Bag Tiffany */}
          <div className="group animate-fade-up animation-delay-1000">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagTiffany} 
                alt="Bolsa Tiffany - Bolsa de crochê turquesa com alça de pérolas" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Bolsa Tiffany
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Charme em tons turquesa
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat text-sm md:text-base rounded-full px-4 md:px-6 hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
                onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/kDMQZZU', 90)}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Clutch Penelope */}
          <div className="group animate-fade-up animation-delay-1200">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagPenelope} 
                alt="Clutch Penelope - Bolsa de crochê elegante em tons neutros" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Clutch Penelope
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Elegância clássica
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat text-sm md:text-base rounded-full px-4 md:px-6 hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
                onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/tAmfn3J', 90)}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

        </div>

        {/* Full Course Offer */}
        <div className="mt-12 md:mt-16 animate-fade-up">
          <div className="bg-gradient-to-r from-primary/10 via-secondary to-primary/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center border border-primary/20 shadow-soft">
            <div className="inline-block bg-primary/20 text-primary px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-montserrat font-semibold mb-4">
              ✨ Oferta Especial
            </div>
            <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Curso Completo - Todas as 8 Bolsas
            </h3>
            <p className="font-montserrat text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto px-2">
              Aprenda a fazer todas as bolsas do curso com acesso vitalício e suporte exclusivo
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
              <span className="font-montserrat text-xl md:text-2xl text-muted-foreground line-through">
                R$ 630
              </span>
              <span className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                R$ 497
              </span>
            </div>
            <p className="font-montserrat text-xs md:text-sm text-muted-foreground mb-6">
              Economia de R$ 133 comprando o curso completo!
            </p>
            <Button 
              size="lg" 
              className="font-montserrat text-base md:text-lg px-6 md:px-10 py-5 md:py-6 rounded-full shadow-hover hover:scale-105 transition-transform w-full sm:w-auto"
              onClick={() => handlePurchaseClick('https://pay.kiwify.com.br/iBXyKqe', 497)}
            >
              Quero o Curso Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BagGallery;

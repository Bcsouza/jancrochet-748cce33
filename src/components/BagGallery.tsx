import bagAlice from "@/assets/bag-alice.jpg";
import bagLolla from "@/assets/bag-lolla.jpg";
import bagTiffany from "@/assets/bag-tiffany.jpg";
import bagPenelope from "@/assets/bag-penelope.jpg";
import { Button } from "@/components/ui/button";

const BagGallery = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Criações Exclusivas
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
            Bolsas artesanais que serão ensinadas no curso que unem técnica, elegância e sofisticação
          </p>
        </div>

        {/* Full Course Offer */}
        <div className="mb-16 animate-fade-up">
          <div className="bg-gradient-to-r from-primary/10 via-secondary to-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20 shadow-soft">
            <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-montserrat font-semibold mb-4">
              ✨ Oferta Especial
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
              Curso Completo - Todas as 4 Bolsas
            </h3>
            <p className="font-montserrat text-muted-foreground mb-6 max-w-xl mx-auto">
              Aprenda a fazer todas as bolsas do curso com acesso vitalício e suporte exclusivo
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="font-montserrat text-2xl text-muted-foreground line-through">
                R$ 360
              </span>
              <span className="font-playfair text-4xl md:text-5xl font-bold text-primary">
                R$ 290
              </span>
            </div>
            <p className="font-montserrat text-sm text-muted-foreground mb-6">
              Economia de R$ 70 comprando o curso completo!
            </p>
            <Button 
              size="lg" 
              className="font-montserrat text-lg px-10 py-6 rounded-full shadow-hover hover:scale-105 transition-transform"
              onClick={() => window.open('#', '_blank')}
            >
              Quero o Curso Completo
            </Button>
          </div>
        </div>

        {/* Individual Bags */}
        <div className="text-center mb-8">
          <p className="font-montserrat text-muted-foreground">
            Ou compre as bolsas individualmente:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Bag Alice */}
          <div className="group animate-fade-up animation-delay-200">
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
                className="font-montserrat rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => window.open('#', '_blank')}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Bag Lolla */}
          <div className="group animate-fade-up animation-delay-400">
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
                className="font-montserrat rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => window.open('#', '_blank')}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Bag Tiffany */}
          <div className="group animate-fade-up animation-delay-600">
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
                className="font-montserrat rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => window.open('#', '_blank')}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>

          {/* Clutch Penelope */}
          <div className="group animate-fade-up animation-delay-800">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img 
                src={bagPenelope} 
                alt="Clutch Penelope - Bolsa de crochê com padrão chevron preto e bege" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Clutch Penelope
              </h3>
              <p className="font-montserrat text-muted-foreground mb-4">
                Estilo chevron sofisticado
              </p>
              <Button 
                variant="outline" 
                className="font-montserrat rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => window.open('#', '_blank')}
              >
                Comprar por R$ 90
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BagGallery;

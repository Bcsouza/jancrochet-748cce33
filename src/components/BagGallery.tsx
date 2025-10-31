import bagAlice from "@/assets/bag-alice.jpg";
import bagLolla from "@/assets/bag-lolla.jpg";
const BagGallery = () => {
  return <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Criações Exclusivas
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">Bolsas artesanais que serão ensinadas no curso que unem técnica, elegância e sofisticação</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Bag Alice */}
          <div className="group animate-fade-up animation-delay-200">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img src={bagAlice} alt="Bolsa Alice - Bolsa de crochê azul com lenço elegante" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Bolsa Alice
              </h3>
              <p className="font-montserrat text-muted-foreground">
                Elegância em tons de azul
              </p>
            </div>
          </div>

          {/* Bag Lolla */}
          <div className="group animate-fade-up animation-delay-400">
            <div className="relative overflow-hidden rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 bg-card">
              <img src={bagLolla} alt="Bolsa Lolla - Bolsa de crochê artesanal em tons naturais" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Bolsa Lolla
              </h3>
              <p className="font-montserrat text-muted-foreground">
                Sofisticação artesanal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BagGallery;
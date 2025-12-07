import janiceSouza from "@/assets/janice-souza.png";

const Instructor = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sua Professora e Especialista em Crochê Moderno
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <img
                src={janiceSouza}
                alt="Janice Souza - Especialista em Crochê Moderno"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-elegant border-4 border-background"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left animate-fade-up animation-delay-200">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">
              Janice Souza
            </h3>
            <div className="space-y-4 font-montserrat text-muted-foreground leading-relaxed">
              <p>
                Aos 15 anos, ingressou em uma escola profissional onde aprendeu tricô, crochê e costura. Com o tempo, o que começou como uma simples curiosidade se transformou em um hobby apaixonante, que a acompanhou por toda a vida.
              </p>
              <p>
                Hoje, Janice é reconhecida por seu trabalho handmade, criando peças modernas e elegantes, desde bolsas e acessórios até itens de decoração em crochê e tricô.
              </p>
              <p>
                Com anos de experiência, ela também conduz workshops presenciais e online, ensinando mulheres de todas as idades a desenvolverem suas próprias peças. Sua didática leve e prática conquistou alunas por todo o Brasil, consolidando sua reputação como <span className="font-semibold text-foreground">especialista em crochê moderno e técnicas artesanais</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;

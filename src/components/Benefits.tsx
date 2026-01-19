import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Aulas práticas e detalhadas",
    description: "Aprenda passo a passo com vídeos de alta qualidade"
  },
  {
    title: "Modelos exclusivos e modernos",
    description: "Designs únicos que você não encontra em outro lugar"
  },
  {
    title: "Aprenda no seu ritmo",
    description: "Estude quando e onde quiser, sem pressa"
  }
];

const Benefits = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-up">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que você vai conquistar
          </h2>
          <p className="font-montserrat text-base md:text-lg text-muted-foreground px-2">
            Transforme sua paixão em uma fonte de renda criativa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="font-montserrat text-sm md:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

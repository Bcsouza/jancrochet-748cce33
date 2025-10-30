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
  },
  {
    title: "Do iniciante ao avançado",
    description: "Ideal para quem quer começar ou aperfeiçoar suas técnicas"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que você vai conquistar
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground">
            Transforme sua paixão em uma fonte de renda criativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="font-montserrat text-muted-foreground leading-relaxed">
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

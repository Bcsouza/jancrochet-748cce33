import { Star } from "lucide-react";
const testimonials = [{
  name: "Maria Eduarda",
  location: "São Paulo, SP",
  text: "Gente, eu nunca tinha feito crochê na vida! Achei que seria impossível, mas a Janice explica tudo tim-tim por tim-tim. Já fiz 3 bolsas e minhas amigas não acreditam que fui eu quem fez! 😍",
  rating: 5
}, {
  name: "Cláudia Regina",
  location: "Belo Horizonte, MG",
  text: "Comprei achando que ia ficar guardado como os outros cursos... mas não consegui parar! As aulas são curtinhas e a Janice tem uma paciência que dá gosto. Recomendo demais!",
  rating: 5
}, {
  name: "Ana Paula",
  location: "Curitiba, PR",
  text: "Estava precisando de uma renda extra e encontrei esse curso. Já vendi 8 bolsas só no meu bairro! O investimento voltou rapidinho. Gratidão, Janice! 🙏",
  rating: 5
}, {
  name: "Fernanda Costa",
  location: "Recife, PE",
  text: "O que mais gostei é que ela mostra os erros também. Quando eu errava, já sabia como corrigir porque ela tinha explicado. Parece que ela tá ali do lado da gente mesmo.",
  rating: 5
}, {
  name: "Juliana Mendes",
  location: "Porto Alegre, RS",
  text: "Minha mãe me deu de presente e foi o melhor presente! Fazer crochê virou minha terapia depois do trabalho. E as bolsas ficam lindas demais, parecem de loja chique!",
  rating: 5
}, {
  name: "Patrícia Lima",
  location: "Fortaleza, CE",
  text: "Tentei aprender pelo YouTube mil vezes e desistia sempre. Aqui não! As explicações são claras e ela responde todas as dúvidas. Vale cada centavo!",
  rating: 5
}];
const Testimonials = () => {
  return <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
            O que nossas alunas estão dizendo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de mulheres que transformaram suas vidas com o crochê
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-1 mb-4">
                {Array.from({
              length: testimonial.rating
            }).map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              
              <p className="text-foreground/90 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            ⭐ Mais de <span className="font-bold text-primary">100 alunas</span> satisfeitas
          </p>
        </div>
      </div>
    </section>;
};
export default Testimonials;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Inscrição realizada com sucesso! ✨", {
        description: "Você será notificada quando o curso for lançado."
      });
      setEmail("");
    }
  };

  return (
    <section id="cta-section" className="py-20 px-6 bg-gradient-elegant relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="animate-fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            As bolsas que encantam estão a um passo de você aprender a fazer
          </h2>
          <p className="font-montserrat text-lg md:text-xl text-muted-foreground mb-10">
            Garanta sua vaga e receba um desconto exclusivo no lançamento
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 animate-scale-in animation-delay-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-14 px-6 font-montserrat text-base rounded-full border-2 border-border focus:border-primary bg-background/80 backdrop-blur-sm"
            />
            <Button 
              type="submit"
              size="lg"
              className="h-14 px-8 font-montserrat font-semibold rounded-full bg-foreground hover:bg-foreground/90 text-background shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Quero minha vaga! 🎁
            </Button>
          </div>
        </form>

        <div className="animate-fade-in animation-delay-400">
          <p className="font-montserrat text-sm text-muted-foreground mb-6">
            Ou garanta agora com o botão abaixo
          </p>
          <Button 
            asChild
            size="lg"
            className="font-montserrat font-semibold text-lg px-12 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105"
          >
            <a href="https://pay.kiwify.com.br/iBXyKqe" target="_blank" rel="noopener noreferrer">
              Eu quero isso! 🧶
            </a>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in animation-delay-600">
          <p className="font-montserrat text-sm text-muted-foreground">
            ✨ Mais de <span className="font-semibold text-foreground">100 pessoas</span> já garantiram sua vaga
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

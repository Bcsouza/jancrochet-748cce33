import { useState } from "react";
import { Pause, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlackFridayRibbon = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="bf-ribbon relative flex items-center bg-campaign text-campaign-foreground" data-paused={paused}>
      <p className="sr-only">Black Friday JanCrochet. Promoção somente até 30/11. Bolsas avulsas por R$ 60 e curso completo por R$ 299.</p>
      <div className="min-w-0 flex-1 overflow-hidden py-4" aria-hidden="true">
        <div className="bf-ribbon-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {[0, 1, 2].map((item) => (
                <div key={item} className="flex shrink-0 items-center gap-6 px-3 text-sm font-semibold">
                  <span className="text-campaign-accent">BLACK FRIDAY</span>
                  <span>Somente até 30/11</span>
                  <Sparkles className="h-4 w-4 text-campaign-accent" />
                  <span>JanCrochet</span>
                  <span className="text-campaign-accent">✦</span>
                  <span>Bolsas avulsas R$ 60</span>
                  <span className="text-campaign-accent">✦</span>
                  <span>Curso completo R$ 299</span>
                  <Sparkles className="h-4 w-4 text-campaign-accent" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="bf-motion-control mx-1 h-11 w-11 shrink-0 text-campaign-foreground hover:bg-campaign-accent/20 hover:text-campaign-foreground"
        aria-label={paused ? "Retomar animação" : "Pausar animação"}
        title={paused ? "Retomar animação" : "Pausar animação"}
        onClick={() => setPaused(!paused)}
      >
        {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default BlackFridayRibbon;
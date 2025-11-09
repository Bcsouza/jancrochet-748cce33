const Footer = () => {
  return <footer className="py-12 px-6 bg-secondary/50 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
            JanCrochet
          </h3>
          <p className="font-montserrat text-sm text-muted-foreground mb-6">
            Transformando fios em arte desde 2020
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="font-montserrat text-sm text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="font-montserrat text-sm text-muted-foreground hover:text-primary transition-colors">
              WhatsApp
            </a>
          </div>

          <p className="font-montserrat text-xs text-muted-foreground">© 2025 JanCrochet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
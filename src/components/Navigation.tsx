import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          🦊 303bx
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('pets')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Mes Pets
          </button>
          <button 
            onClick={() => scrollToSection('vouches')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Vouches
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <Button variant="discord" size="sm">
          Discord
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
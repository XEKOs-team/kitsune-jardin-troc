import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PetsSection from "@/components/PetsSection";
import VouchesSection from "@/components/VouchesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PetsSection />
      <VouchesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-card/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg font-bold gradient-text mb-2">
            🦊 PetTradeur Pro
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 • Échanges sécurisés de pets Roblox • Plus de 500 vouches
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

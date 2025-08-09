import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-purple/20 rounded-full blur-3xl floating" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            PetTradeur Pro
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            🌟 <span className="text-accent-purple font-semibold">Échange tes pets et kitsunes</span> contre des <span className="text-accent-blue font-semibold">Robux</span> 🌟<br />
            <span className="text-lg">Transactions rapides • Sécurisées • Fiables</span>
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 glow-card">
              <Shield className="w-5 h-5 text-accent-blue" />
              <span className="text-sm font-medium">100% Sécurisé</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 glow-card">
              <Zap className="w-5 h-5 text-accent-purple" />
              <span className="text-sm font-medium">Livraison Instantanée</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 glow-card">
              <Sparkles className="w-5 h-5 text-accent-pink" />
              <span className="text-sm font-medium">+500 Vouches</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              🔥 Voir mes pets disponibles
            </Button>
            <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
              💬 Me contacter sur Discord
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by the community</p>
            <div className="flex justify-center items-center gap-8 text-2xl">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-lg font-bold text-accent-purple">5.0/5</span>
              <span className="text-sm text-muted-foreground">sur 500+ échanges</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
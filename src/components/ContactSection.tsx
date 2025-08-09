import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Shield, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Me Contacter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à échanger ? Contactez-moi sur Discord pour des transactions rapides et sécurisées !
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Discord Contact */}
          <Card className="glow-card bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl gradient-text">Discord Principal</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-[#5865F2]/10 rounded-lg p-6 border border-[#5865F2]/20">
                <div className="text-2xl font-bold text-[#5865F2] mb-2">
                  PetTradeur_Pro#1234
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Mon Discord principal pour tous les échanges
                </div>
                <Button variant="discord" size="lg" className="w-full">
                  🎮 M'ajouter sur Discord
                </Button>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-accent-blue" />
                  <span>En ligne 12h-23h (heure FR)</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-accent-purple" />
                  <span>Réponse en moins de 5min</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Trading Info */}
          <Card className="glow-card bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl gradient-text">Infos Trading</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-gradient-primary/10 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">🛡️ Sécurité Garantie</h4>
                  <p className="text-sm text-muted-foreground">
                    Middleman disponible • Screenshots des trades • Réputation vérifiable
                  </p>
                </div>
                
                <div className="bg-gradient-secondary/10 rounded-lg p-4 border border-secondary-glow/20">
                  <h4 className="font-semibold text-secondary-glow mb-2">⚡ Trading Rapide</h4>
                  <p className="text-sm text-muted-foreground">
                    Livraison immédiate • Stock toujours disponible • Support 24/7
                  </p>
                </div>
                
                <div className="bg-gradient-accent/10 rounded-lg p-4 border border-accent-purple/20">
                  <h4 className="font-semibold text-accent-purple mb-2">💎 Prix Compétitifs</h4>
                  <p className="text-sm text-muted-foreground">
                    Meilleurs prix du marché • Négociation possible • Réductions bulk
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="gaming" size="lg" className="w-full">
                  💬 Commencer à trader
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-border/50 glow-card">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              🌟 Pourquoi choisir PetTradeur Pro ?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-semibold text-foreground">+500 Vouches</div>
                <div className="text-sm text-muted-foreground">Réputation excellente</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="font-semibold text-foreground">Livraison Instant</div>
                <div className="text-sm text-muted-foreground">Pets en 5 minutes</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">💎</div>
                <div className="font-semibold text-foreground">Stock Exclusif</div>
                <div className="text-sm text-muted-foreground">Pets rares disponibles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
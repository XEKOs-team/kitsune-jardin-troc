import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import kitsuneImage from "@/assets/kitsune-1.png";
import dragonImage from "@/assets/dragon-pet.png";
import unicornImage from "@/assets/unicorn-pet.png";
import phoenixImage from "@/assets/phoenix-pet.png";

const pets = [
  {
    id: 1,
    name: "Kitsune Rainbow",
    image: kitsuneImage,
    price: "1,200",
    rarity: "Légendaire",
    rarityColor: "bg-gradient-accent",
    description: "Kitsune aux couleurs arc-en-ciel",
    features: ["🌈 Effets rainbow", "✨ Animation unique", "💎 Très rare"]
  },
  {
    id: 2,
    name: "Kitsune Huge+Mega",
    image: dragonImage,
    price: "1,500",
    rarity: "Mythique",
    rarityColor: "bg-gradient-primary",
    description: "Kitsune de taille énorme avec bonus",
    features: ["🔥 Taille XXL", "⚡ Bonus mega", "🎆 Effets spéciaux"]
  },
  {
    id: 3,
    name: "Kitsune Normal",
    image: unicornImage,
    price: "850",
    rarity: "Rare",
    rarityColor: "bg-gradient-secondary",
    description: "Kitsune classique mais élégant",
    features: ["🦊 Design original", "✨ Qualité garantie", "💫 Parfait début"]
  }
];

const PetsSection = () => {
  return (
    <section id="pets" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Mes Pets Disponibles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collection exclusive de pets rares et kitsunes pour Grow A Garden
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pets.map((pet) => (
            <Card key={pet.id} className="glow-card hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <img 
                    src={pet.image} 
                    alt={pet.name}
                    className="w-48 h-48 mx-auto object-contain floating"
                    style={{animationDelay: `${pet.id * 0.5}s`}}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={`${pet.rarityColor} text-white font-bold px-3 py-1`}>
                      {pet.rarity}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl gradient-text">{pet.name}</CardTitle>
                <p className="text-muted-foreground">{pet.description}</p>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  {pet.features.map((feature, index) => (
                    <div key={index} className="text-sm text-foreground">
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-primary/10 rounded-lg p-4 border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {pet.price} Robux
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Prix négociable • Stock limité
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="hero" className="flex-1">
                    💰 Acheter maintenant
                  </Button>
                  <Button variant="outline" className="flex-1">
                    💬 Négocier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            📦 Plus de 50+ pets en stock • 🔄 Nouveau stock chaque semaine
          </p>
          <Button variant="gaming" size="lg">
            🎮 Voir tous mes pets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PetsSection;
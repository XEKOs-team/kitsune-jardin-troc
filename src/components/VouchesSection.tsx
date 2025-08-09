import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const vouches = [
  {
    id: 1,
    name: "Alex_Gaming",
    rating: 5,
    comment: "Super vendeur ! J'ai acheté un kitsune légendaire et la transaction s'est très bien passée. Livraison instantanée et pet exactement comme décrit. Je recommande à 100% ! 🔥",
    date: "Il y a 2 heures"
  },
  {
    id: 2,
    name: "Marie_Trader",
    rating: 5,
    comment: "Excellent service ! Très professionnel et rapide. J'ai eu mon dragon cosmique en moins de 5 minutes. Prix correct et vendeur de confiance. Merci beaucoup ! ⭐",
    date: "Il y a 5 heures"
  },
  {
    id: 3,
    name: "Pierre_Pro",
    rating: 5,
    comment: "Meilleur vendeur sur Roblox ! J'ai fait plus de 10 échanges avec lui et jamais eu de problème. Toujours honnête sur les prix et très réactif sur Discord. Top ! 💎",
    date: "Il y a 1 jour"
  },
  {
    id: 4,
    name: "Luna_Collector",
    rating: 5,
    comment: "Incroyable ! J'ai enfin trouvé la licorne que je cherchais depuis des semaines. Transaction sécurisée et vendeur très sympa. Je reviendrai c'est sûr ! 🦄",
    date: "Il y a 1 jour"
  },
  {
    id: 5,
    name: "MaxGamer_YT",
    rating: 5,
    comment: "Transaction parfaite ! Pet livré immédiatement et exactement comme sur les photos. Prix raisonnable et service client au top. Highly recommended ! 🎮",
    date: "Il y a 2 jours"
  },
  {
    id: 6,
    name: "Sophie_Stars",
    rating: 5,
    comment: "Très satisfaite de mon achat ! Le phénix est magnifique avec ses effets de feu. Vendeur de confiance, rapide et professionnel. Merci encore ! 🔥",
    date: "Il y a 2 jours"
  },
  {
    id: 7,
    name: "Tom_Robux",
    rating: 5,
    comment: "Excellent vendeur ! J'ai échangé plusieurs pets avec lui et c'est toujours parfait. Bons prix, livraison rapide et très fiable. Je le recommande ! 💯",
    date: "Il y a 3 jours"
  },
  {
    id: 8,
    name: "Emma_Gamer",
    rating: 5,
    comment: "Super expérience ! First time trading et tout s'est très bien passé. Vendeur patient qui explique bien. Mon kitsune est parfait ! Merci beaucoup ! ✨",
    date: "Il y a 3 jours"
  },
  {
    id: 9,
    name: "Julien_Trade",
    rating: 5,
    comment: "Service exceptionnel ! Vendeur très professionnel qui connaît bien ses pets. Prix corrects et négociation possible. J'ai eu exactement ce que je voulais ! 🌟",
    date: "Il y a 4 jours"
  },
  {
    id: 10,
    name: "Chloe_Pets",
    rating: 5,
    comment: "Amazing seller ! Very fast delivery and beautiful pets. He has the best collection I've seen. Already planning my next purchase ! Thank you ! 💖",
    date: "Il y a 4 jours"
  },
  {
    id: 11,
    name: "Ryan_Legendary",
    rating: 5,
    comment: "Top vendeur ! J'ai acheté 3 pets différents et tout était parfait. Très bon rapport qualité-prix et service impeccable. Je recommande vivement ! 🏆",
    date: "Il y a 5 jours"
  },
  {
    id: 12,
    name: "Lea_Magic",
    rating: 5,
    comment: "Parfait du début à la fin ! Vendeur très sympa et professionnel. Ma licorne enchantée est magnifique avec tous ses effets. Merci infiniment ! 🌈",
    date: "Il y a 5 jours"
  }
];

const VouchesSection = () => {
  return (
    <section id="vouches" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Vouches & Témoignages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plus de 500 clients satisfaits • Note moyenne 5/5 étoiles
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent-purple text-accent-purple" />
              ))}
            </div>
            <span className="text-2xl font-bold text-accent-purple">5.0/5</span>
            <span className="text-muted-foreground">• 500+ avis</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {vouches.map((vouch, index) => (
            <Card 
              key={vouch.id} 
              className="glow-card bg-card/50 backdrop-blur-sm border-border/50 hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold">
                      {vouch.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{vouch.name}</div>
                    <div className="text-sm text-muted-foreground">{vouch.date}</div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(vouch.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-purple text-accent-purple" />
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-foreground leading-relaxed">
                  {vouch.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            ✨ Rejoignez des centaines de clients satisfaits ! ✨
          </p>
          <div className="bg-gradient-primary/10 rounded-lg p-6 max-w-md mx-auto border border-primary/20">
            <div className="text-2xl font-bold text-primary mb-2">500+ Vouches</div>
            <div className="text-sm text-muted-foreground">
              Transactions réussies depuis 2023
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VouchesSection;
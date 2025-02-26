
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MarketplacePreview = () => {
  const recentItems = [
    {
      title: "MyWater",
      description: "Solution de purification d'eau potable conçue pour un usage domestique, offrant une technologie efficace et accessible.",
      image: "/lovable-uploads/f39af18e-3ecc-464b-97e1-e039f0bdfb3d.png",
      category: "MVP"
    },
    {
      title: "Loomeno",
      description: "Plateforme no-code permettant de créer des workflows personnalisés pour gérer efficacement toutes vos demandes.",
      image: "/lovable-uploads/f39af18e-3ecc-464b-97e1-e039f0bdfb3d.png",
      category: "Automatisation"
    },
    {
      title: "Yeet",
      description: "Plateforme connectant les piscines à des maîtres-nageurs indépendants, simplifiant la recherche de profils.",
      image: "/lovable-uploads/f39af18e-3ecc-464b-97e1-e039f0bdfb3d.png",
      category: "Plateforme"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Marketplace</h2>
            <p className="text-white/80">Découvrez nos dernières réalisations et automatisations</p>
          </div>
          <Link 
            to="/marketplace"
            className="inline-flex items-center gap-2 text-mint hover:text-mint/80 transition-colors"
          >
            Voir tout <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {recentItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-forest-light/30 backdrop-blur-xl rounded-xl p-6 h-full">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-forest-light/50">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-mint/10 text-mint mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default MarketplacePreview;

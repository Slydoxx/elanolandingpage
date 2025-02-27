
import React, { useRef, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MarketplacePreview = () => {
  const recentItems = [
    {
      title: "Projet 1",
      description: "À venir - Nous préparons actuellement une série de projets pour illustrer nos réalisations. Restez à l'écoute !",
      category: "À venir"
    },
    {
      title: "Projet 2",
      description: "À venir - Nous préparons actuellement une série de projets pour illustrer nos réalisations. Restez à l'écoute !",
      category: "À venir"
    },
    {
      title: "Projet 3",
      description: "À venir - Nous préparons actuellement une série de projets pour illustrer nos réalisations. Restez à l'écoute !",
      category: "À venir"
    }
  ];

  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Fonction pour gérer le défilement du carousel
  const handleCarouselScroll = (api: any) => {
    if (!api || !scrollTrackRef.current) return;
    
    const scrollSnaps = api.scrollSnapList();
    const scrollProgress = api.scrollProgress();
    
    // Calculer la position relative du scroll
    const position = scrollProgress * (scrollTrackRef.current.clientWidth - scrollWidth);
    setScrollPosition(position >= 0 ? position : 0);
  };

  return (
    <section id="marketplace" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Marketplace</h2>
          <p className="text-white/80">Découvrez nos dernières réalisations et automatisations</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onScroll={(api) => handleCarouselScroll(api)}
        >
          <CarouselContent>
            {recentItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-forest-light/30 backdrop-blur-xl rounded-xl p-6 h-full">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-gray-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-mint font-medium">À venir</span>
                    </div>
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

          <div className="mt-6 md:hidden">
            {/* Indicateurs de navigation sur mobile */}
            <div className="flex items-center justify-center space-x-2">
              {recentItems.map((_, index) => (
                <div 
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    index === 0 ? "bg-mint" : "bg-forest-light/50"
                  }`}
                />
              ))}
            </div>
            {/* Message d'indication de défilement */}
            <div className="text-center mt-3 text-mint/70 text-sm animate-pulse">
              <span>← Glissez pour voir plus →</span>
            </div>
          </div>

          <div className="hidden md:flex justify-end gap-2 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default MarketplacePreview;

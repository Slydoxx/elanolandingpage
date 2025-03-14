
import { Button } from "@/components/ui/button";
import { Star, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<HTMLIFrameElement>(null);

  const toggleSound = () => {
    if (playerRef.current) {
      playerRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: isMuted ? 'unMute' : 'mute'
        }),
        '*'
      );
      setIsMuted(!isMuted);
    }
  };

  const scrollToMarketplace = () => {
    const element = document.getElementById("marketplace");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden" aria-labelledby="hero-heading">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
            <Star className="w-4 h-4 text-mint" aria-hidden="true" />
            <span className="text-mint text-sm font-medium">Votre succès, notre priorité</span>
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
            Un prototype
            <br />
            <span className="bg-[#D3E4FD]/10 px-2 rounded-lg">en 1 semaine</span>
            <br />
            sur mesure
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            Notre accompagnement vise à répondre aux besoins de votre cible en créant des produits digitaux performants sur les plans fonctionnel et technique.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button 
              className="w-full sm:w-auto bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg"
              onClick={() => window.open('https://calendly.com/thom-cademi/30min', '_blank')}
              aria-label="Réserver mon sprint de développement"
            >
              Réserver mon sprint
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-mint/20 text-mint hover:bg-mint/10"
              onClick={scrollToMarketplace}
              aria-label="Voir la Marketplace"
            >
              {'->'} Marketplace
            </Button>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0">
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" aria-hidden="true"></div>
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            <Button 
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-forest/80 hover:bg-forest text-mint"
              onClick={toggleSound}
              aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
            </Button>
            <iframe
              ref={playerRef}
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/CoEg1ci3F-s?autoplay=1&mute=1&enablejsapi=1"
              title="Présentation de notre processus de création de prototype en une semaine"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10">
            <p className="text-mint text-4xl font-bold">1 semaine</p>
            <p className="text-white/80">pour utiliser votre outil</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

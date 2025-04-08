
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star } from "lucide-react";

const Hero = () => {
  const bookCall = () => {
    window.open('https://calendly.com/thom-cademi/30min', '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden" aria-labelledby="hero-heading">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
            <Star className="w-4 h-4 text-mint" aria-hidden="true" />
            <span className="text-mint text-sm font-medium">Offre pour entrepreneurs et startups</span>
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Votre 
            <span className="bg-[#D3E4FD]/10 px-2 ml-2 rounded-lg">prototype</span>
            <br />
            fonctionnel
            <br />
            <span className="text-mint">en 7 jours</span>
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            L'accélérateur de startups tech pour entrepreneurs incubés, PME et porteurs de projets ambitieux.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button 
              className="w-full sm:w-auto bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg"
              onClick={bookCall}
              aria-label="Réserver mon appel découverte gratuit"
            >
              Réserver mon appel découverte gratuit
            </Button>
            <div className="flex items-center gap-2 text-mint">
              <Clock className="w-5 h-5" />
              <span>Places limitées chaque mois</span>
            </div>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0">
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" aria-hidden="true"></div>
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Entrepreneur travaillant sur son prototype" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10">
            <p className="text-mint text-4xl font-bold">2000€</p>
            <p className="text-white/80">Tout compris</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

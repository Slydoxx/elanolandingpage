
import { Mail, Youtube, Linkedin, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const bookCall = () => {
    window.open('https://calendly.com/thom-cademi/30min', '_blank');
  };

  return (
    <footer className="py-20 px-4 bg-forest border-t border-mint/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Prêt à démarrer?</h2>
            <p className="text-white/80 mb-6 max-w-md">
              Réservez votre appel découverte gratuit pour discuter de votre projet et voir comment nous pouvons vous aider à le concrétiser en 7 jours.
            </p>
            <Button 
              className="bg-mint hover:bg-mint/90 text-forest font-medium mb-8"
              onClick={bookCall}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Réserver mon appel gratuit
            </Button>
            <div className="space-y-4">
              <a 
                href="mailto:Thom@cademi.fr"
                className="flex items-center gap-2 text-white/60 hover:text-mint transition-colors text-lg group"
              >
                <Mail className="w-5 h-5 group-hover:text-mint transition-colors" />
                Thom@cademi.fr
              </a>
              <div className="flex items-center gap-2 text-white/60 text-lg">
                <MapPin className="w-5 h-5 text-white/60" />
                <span>2 square villaret joyeuse, 75017 Paris</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Liens rapides</h3>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => document.getElementById("pain-points")?.scrollIntoView({ behavior: "smooth" })} className="text-white/60 hover:text-mint transition-colors text-left">
                Problématiques
              </button>
              <button onClick={() => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })} className="text-white/60 hover:text-mint transition-colors text-left">
                Notre offre
              </button>
              <button onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })} className="text-white/60 hover:text-mint transition-colors text-left">
                Témoignages
              </button>
              <button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="text-white/60 hover:text-mint transition-colors text-left">
                FAQ
              </button>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 mt-8">Suivez-nous</h3>
            <div className="flex gap-6">
              <a 
                href="https://www.youtube.com/@ThomSzydlo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-mint transition-colors group"
              >
                <Youtube className="w-6 h-6 group-hover:text-mint transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/thomas-szydlo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-mint transition-colors group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-mint transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-mint/10 mt-16 pt-8 flex justify-center text-white/60">
          <p>&copy; {new Date().getFullYear()} CADEMI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

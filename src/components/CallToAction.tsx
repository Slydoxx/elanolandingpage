
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock } from "lucide-react";

const CallToAction = () => {
  const bookCall = () => {
    window.open('https://calendly.com/thom-cademi/30min', '_blank');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-forest-light/50 backdrop-blur-xl rounded-xl p-8 md:p-12 relative overflow-hidden">
        {/* Gradient accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-mint/30 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Prêt à transformer votre vision en réalité?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Le temps est votre ressource la plus précieuse. Chaque semaine qui passe est une opportunité manquée de tester, valider et faire évoluer votre idée.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <Button 
              className="w-full md:w-auto bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg"
              onClick={bookCall}
            >
              <CalendarCheck className="w-5 h-5 mr-2" />
              Discutons de votre projet - Appel gratuit de 30 minutes
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Sans engagement</span>
            </div>
            <span>•</span>
            <div>
              <span>Spots limités chaque semaine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

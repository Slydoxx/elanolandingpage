
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bookCall = () => {
    window.open('https://calendly.com/thom-cademi/30min', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Elano
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("pain-points")} 
            className="text-white/90 hover:text-white transition-colors"
          >
            Problématiques
          </button>
          <button 
            onClick={() => scrollToSection("offer")} 
            className="text-white/90 hover:text-white transition-colors"
          >
            Notre offre
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="text-white/90 hover:text-white transition-colors"
          >
            Témoignages
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="text-white/90 hover:text-white transition-colors"
          >
            FAQ
          </button>
        </div>
        <Button 
          className="bg-mint hover:bg-mint/90 text-forest font-medium"
          onClick={bookCall}
        >
          <CalendarCheck className="w-4 h-4 mr-2 hidden md:inline" />
          <span className="hidden md:inline">Réserver mon appel</span>
          <span className="md:hidden">Contact</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

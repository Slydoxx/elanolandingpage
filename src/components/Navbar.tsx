
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Elano
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("methodology")} 
            className="text-white/90 hover:text-white transition-colors"
          >
            Notre méthodologie
          </button>
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-white/90 hover:text-white transition-colors"
          >
            Nos services
          </button>
          <Link to="/marketplace" className="text-white/90 hover:text-white transition-colors">
            Marketplace
          </Link>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="text-white/90 hover:text-white transition-colors"
          >
            FAQ
          </button>
          <span className="text-white/40 cursor-not-allowed" title="Bientôt disponible">
            Blog
          </span>
        </div>
        <Button 
          className="bg-mint hover:bg-mint-light text-forest font-medium"
          onClick={() => window.open('https://calendly.com/thom-cademi/30min', '_blank')}
        >
          <span className="hidden md:inline">Planifier un appel</span>
          <span className="md:hidden">Contact</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

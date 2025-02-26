
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Elano
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/90 hover:text-white transition-colors bg-transparent">
                  Nos services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] bg-transparent border-0">
                    <Link
                      to="/prototype-sur-mesure"
                      className="block p-3 space-y-1 hover:bg-mint/5 rounded-md transition-colors"
                    >
                      <div className="font-medium text-white">Prototype sur mesure</div>
                      <p className="text-sm text-white/70">
                        Créez votre prototype digital personnalisé
                      </p>
                    </Link>
                    <Link
                      to="/ia-automatisation"
                      className="block p-3 space-y-1 hover:bg-mint/5 rounded-md transition-colors"
                    >
                      <div className="font-medium text-white">Parlons IA & automatisation</div>
                      <p className="text-sm text-white/70">
                        Optimisez vos processus avec l'IA
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/#methodology" className="text-white/90 hover:text-white transition-colors">
            Notre méthodologie
          </Link>
          <Link to="/#pricing" className="text-white/90 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="/marketplace" className="text-white/90 hover:text-white transition-colors">
            Marketplace
          </Link>
          <span className="text-white/40 cursor-not-allowed" title="Bientôt disponible">
            Blog
          </span>
        </div>
        <Button 
          className="bg-mint hover:bg-mint-light text-forest font-medium"
          onClick={() => window.open('https://calendly.com/thom-cademi/30min', '_blank')}
        >
          Planifier un appel
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

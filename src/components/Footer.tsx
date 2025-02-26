
import { Mail, Youtube, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-forest border-t border-mint/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's talk</h2>
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
            <h3 className="text-2xl font-semibold mb-4">Suivez-nous</h3>
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

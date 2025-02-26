
import React from "react";
import { Code, Cpu, Database, Layout, MessageSquare, Robot, Sparkles, Wand2 } from "lucide-react";

const Services = () => {
  const productServices = [
    {
      icon: Code,
      title: "Développement Full-Stack",
      description: "Applications web modernes et performantes construites avec les dernières technologies."
    },
    {
      icon: Layout,
      title: "Design UX/UI",
      description: "Interfaces intuitives et esthétiques centrées sur l'expérience utilisateur."
    },
    {
      icon: Database,
      title: "Architecture Cloud",
      description: "Solutions scalables et sécurisées déployées sur le cloud."
    }
  ];

  const aiServices = [
    {
      icon: Robot,
      title: "Automatisation IA",
      description: "Optimisation des processus métier grâce à l'intelligence artificielle."
    },
    {
      icon: MessageSquare,
      title: "Chatbots Intelligents",
      description: "Assistants virtuels personnalisés pour améliorer l'engagement client."
    },
    {
      icon: Wand2,
      title: "Génération de Contenu",
      description: "Création automatisée de textes, images et autres contenus marketing."
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Nos Services
          </h2>
          <p className="text-white/80">
            Des solutions innovantes combinant expertise technique et intelligence artificielle
          </p>
        </div>

        <div className="space-y-16">
          {/* Services de développement */}
          <div className="bg-forest-light/30 backdrop-blur-xl rounded-xl p-8">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-6 h-6 text-mint" />
              <h3 className="text-2xl font-bold text-white">Services de Développement</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {productServices.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-forest-light/50 hover:bg-forest-light/70 transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 text-mint mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-white/60">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services IA */}
          <div className="bg-forest-light/30 backdrop-blur-xl rounded-xl p-8">
            <div className="flex items-center gap-2 mb-8">
              <Cpu className="w-6 h-6 text-mint" />
              <h3 className="text-2xl font-bold text-white">Services IA</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-forest-light/50 hover:bg-forest-light/70 transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 text-mint mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-white/60">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

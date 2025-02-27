
import React from "react";
import { Code, Cpu, Database, Layout, MessageSquare, Bot, Sparkles, Wand2, BookOpen } from "lucide-react";

const Services = () => {
  const productServices = [
    {
      icon: Code,
      title: "Développement Full-Stack",
      description: "Applications web performantes & scalables, adaptées à vos besoins."
    },
    {
      icon: Layout,
      title: "Design UX/UI",
      description: "Création d'interfaces intuitives et optimisées pour maximiser l'expérience utilisateur."
    },
    {
      icon: Database,
      title: "Architecture Cloud",
      description: "Déploiement sécurisé et optimisé sur des infrastructures Cloud modernes."
    }
  ];

  const aiServices = [
    {
      icon: Bot,
      title: "Automatisation IA",
      description: "Optimisation des workflows internes avec des process automatisés et intelligents."
    },
    {
      icon: MessageSquare,
      title: "Chatbots Intelligents",
      description: "Assistants conversationnels personnalisés pour améliorer l'engagement client."
    },
    {
      icon: Wand2,
      title: "Génération de Contenu IA",
      description: "Création automatisée de contenus textes, images et vidéos pour le marketing digital."
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
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-mint" />
              <h3 className="text-2xl font-bold text-white">Services de Développement</h3>
            </div>
            <p className="text-white/80 mb-8">📌 Services de Développement (Sur-mesure, adaptés aux besoins spécifiques de chaque client)</p>
            <div className="grid md:grid-cols-3 gap-8">
              {productServices.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-forest-light/50 hover:bg-forest-light/70 transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 text-mint mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">✅ {service.title}</h4>
                  <p className="text-white/60">🔹 {service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services IA */}
          <div className="bg-forest-light/30 backdrop-blur-xl rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-mint" />
              <h3 className="text-2xl font-bold text-white">Services IA</h3>
            </div>
            <p className="text-white/80 mb-8">📌 Services IA (Optimisation des process grâce à l'Intelligence Artificielle)</p>
            <div className="grid md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-forest-light/50 hover:bg-forest-light/70 transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 text-mint mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">✅ {service.title}</h4>
                  <p className="text-white/60">🔹 {service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cas d'usage concrets */}
          <div className="bg-forest-light/30 backdrop-blur-xl rounded-xl p-8">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="w-6 h-6 text-mint" />
              <h3 className="text-2xl font-bold text-white">Cas d'usage concrets</h3>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-mint text-xl font-medium mb-2">À venir</p>
              <p className="text-white/60 text-center max-w-2xl">
                Nous préparons actuellement une série de cas d'usage concrets pour illustrer comment nos solutions ont aidé nos clients à résoudre leurs défis. Restez à l'écoute !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

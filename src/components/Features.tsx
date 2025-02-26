
import React, { useState } from "react";
import { Star, Lightbulb, Laptop, Rocket } from "lucide-react";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "Ateliers pour clarifier votre vision, analyse des besoins utilisateurs et définition des fonctionnalités clés pour un MVP efficace.",
      content: {
        title: "Phase de Discovery",
        text: "La phase de discovery est cruciale pour le succès de votre projet. Nous travaillons ensemble pour comprendre vos objectifs, analyser le marché et définir les fonctionnalités essentielles.",
        video: "placeholder-video-url-1" // À remplacer par la vraie URL de la vidéo
      }
    },
    {
      icon: Star,
      title: "Design",
      description: "Recherche UX et prototypage rapide, interfaces modernes et intuitives, tests utilisateurs et validation des hypothèses.",
      content: {
        title: "Design & Prototypage",
        text: "Notre approche du design combine esthétique et fonctionnalité. Nous créons des interfaces intuitives et élégantes qui répondent aux besoins de vos utilisateurs.",
        video: "placeholder-video-url-2"
      }
    },
    {
      icon: Laptop,
      title: "Build",
      description: "Développement agile, coding optimisé par l'IA, intégration des meilleures technologies et déploiement rapide.",
      content: {
        title: "Développement & Construction",
        text: "Notre équipe utilise les dernières technologies et pratiques de développement pour construire votre produit de manière efficace et évolutive.",
        video: "placeholder-video-url-3"
      }
    },
    {
      icon: Rocket,
      title: "Launch & Iterate",
      description: "Lancement de votre MVP, suivi des KPIs et des feedbacks et améliorations continues pour scaler votre produit.",
      content: {
        title: "Lancement & Amélioration Continue",
        text: "Le lancement n'est que le début. Nous continuons à optimiser et améliorer votre produit en fonction des retours utilisateurs et des métriques.",
        video: "placeholder-video-url-4"
      }
    }
  ];

  return (
    <section id="methodology" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Notre méthodologie
          </h2>
          <p className="text-white/80">Un processus clair, testé et efficace pour rapidement se mettre au service de la transformation de projet en produit digital performant</p>
        </div>

        {/* Tabs horizontaux */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                activeTab === index 
                ? "bg-forest-light border-l-4 border-mint" 
                : "bg-forest-light/50 hover:bg-forest-light"
              }`}
            >
              <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-4">
                {React.createElement(feature.icon, { 
                  className: `w-6 h-6 ${activeTab === index ? "text-mint" : "text-mint/60"}`
                })}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                activeTab === index ? "text-mint" : "text-white"
              }`}>
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Contenu en dessous */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-forest-light rounded-xl p-8">
            <h3 className="text-2xl font-bold text-mint mb-4">
              {features[activeTab].content.title}
            </h3>
            <div className="aspect-video bg-black/20 rounded-lg mb-6">
              {/* Placeholder pour la vidéo */}
              <div className="w-full h-full flex items-center justify-center text-white/40">
                Vidéo à venir
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              {features[activeTab].content.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

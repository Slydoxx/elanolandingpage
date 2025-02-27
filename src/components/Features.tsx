
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
        text: "📌 Clarification des besoins et cadrage du projet\n🔹 Ateliers pour comprendre votre vision et les besoins utilisateurs\n🔹 Définition des fonctionnalités clés pour un MVP efficace\n🔹 Benchmark rapide des solutions existantes",
        video: "placeholder-video-url-1"
      }
    },
    {
      icon: Star,
      title: "Design",
      description: "Recherche UX et prototypage rapide, interfaces modernes et intuitives, tests utilisateurs et validation des hypothèses.",
      content: {
        title: "Design & Prototypage",
        text: "📌 Création de l'expérience utilisateur et prototypage rapide\n🔹 Définition des parcours utilisateurs\n🔹 Tests utilisateurs pour valider les hypothèses\n🔹 Définir les features essentielles",
        video: "placeholder-video-url-2"
      }
    },
    {
      icon: Laptop,
      title: "Build",
      description: "Développement agile, coding optimisé par l'IA, intégration des meilleures technologies et déploiement rapide.",
      content: {
        title: "Developpement & construction",
        text: "📌 Développement rapide et mise en place technique\n🔹 Développement agile avec intégration low-code et IA\n🔹 Automatisation et connectivité avec vos outils métier\n🔹 Livraison d'un prototype fonctionnel en 5 jours",
        video: "placeholder-video-url-3"
      }
    },
    {
      icon: Rocket,
      title: "Launch & Iterate",
      description: "Lancement de votre MVP, suivi des KPIs et des feedbacks et améliorations continues pour scaler votre produit.",
      content: {
        title: "Launch & Iterate",
        text: "📌 Test et amélioration continue\n🔹 Mise en production d'un MVP exploitable\n🔹 Suivi des KPIs et collecte de feedbacks\n🔹 Optimisation et évolutions pour assurer la scalabilité",
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

        {/* Grille responsive 2x2 sur mobile, 4x1 sur desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-4 md:p-6 rounded-xl cursor-pointer transition-all duration-500 transform ${
                activeTab === index 
                ? "bg-forest-light scale-105 border-l-4 border-mint shadow-lg shadow-mint/20" 
                : "bg-forest-light/50 hover:bg-forest-light hover:scale-102"
              }`}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 ${
                activeTab === index ? "bg-mint/20" : "bg-mint/5"
              }`}>
                {React.createElement(feature.icon, { 
                  className: `w-5 h-5 md:w-6 md:h-6 transition-all duration-500 ${activeTab === index ? "text-mint" : "text-mint/60"}`
                })}
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-2 transition-all duration-500 ${
                activeTab === index ? "text-mint" : "text-white"
              }`}>
                {feature.title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Contenu détaillé */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest-light/50 backdrop-blur-xl rounded-xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <div className="aspect-video bg-black/20 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white/40">
                Vidéo à venir
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-mint animate-scale-in">
                {features[activeTab].content.title}
              </h3>
              <div className="text-white/80 leading-relaxed whitespace-pre-line">
                {features[activeTab].content.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

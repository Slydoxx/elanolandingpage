
import { CheckCircle2, FileText, Layout, Code, Clock, IterationCw, Briefcase } from "lucide-react";

const Offer = () => {
  const offerItems = [
    {
      icon: FileText,
      title: "Cahier des charges précis et actionnable",
      description: "Co-construit avec vous et enrichi par des entretiens utilisateurs pour garantir que chaque fonctionnalité répond à un besoin réel."
    },
    {
      icon: Layout,
      title: "Design UX/UI professionnel",
      description: "Interface intuitive et design moderne qui impressionne dès le premier regard - avec maquettes complètes et parcours utilisateur optimisés."
    },
    {
      icon: Code,
      title: "Développement MVP robuste",
      description: "Code propre et performant, construit pour évoluer avec votre croissance, sans dette technique qui vous freinera plus tard."
    },
    {
      icon: Clock,
      title: "Livraison express en 7 jours ouvrés",
      description: "Quand les autres sont encore en phase de devis, vous aurez déjà un produit à montrer."
    },
    {
      icon: IterationCw,
      title: "Itération post-livraison incluse",
      description: "Cycle d'amélioration basé sur les premiers retours utilisateurs pour affiner votre proposition de valeur."
    },
    {
      icon: Briefcase,
      title: "Accompagnement stratégique continu",
      description: "Notre expertise tech au service de votre vision business - nous ne sommes pas que des exécutants, mais des partenaires dans votre réussite."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Notre promesse : De l'idée au prototype en 7 jours chrono
        </h2>
        <p className="text-white/80 text-lg">
          Nous ne construisons pas simplement un produit. Nous créons la vitrine technique qui prouve la viabilité de votre vision. Un prototype complet, fonctionnel et impressionnant - prêt à convaincre investisseurs, partenaires et premiers utilisateurs.
        </p>
      </div>

      <div className="bg-forest-light/30 backdrop-blur-xl rounded-xl p-8 mt-12">
        <h3 className="text-2xl font-bold text-mint mb-8 text-center">Votre package complet de lancement tech à 2000€</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {offerItems.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-mint" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-mint mr-2 flex-shrink-0" /> 
                  {item.title}
                </h4>
                <p className="text-white/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;


import { CheckCircle2, FileText, Layout, Code, Clock, IterationCw, Briefcase, UserCheck, BarChart3 } from "lucide-react";

const OfferProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Entretiens utilisateurs",
      description: "Nous interrogeons vos futurs utilisateurs pour comprendre leurs besoins réels",
      icon: UserCheck
    },
    {
      number: 2,
      title: "Cahier des charges",
      description: "Nous construisons ensemble un cahier des charges précis et actionnable",
      icon: FileText
    },
    {
      number: 3,
      title: "Design UX/UI",
      description: "Nous créons des maquettes intuitives et un parcours utilisateur optimal",
      icon: Layout
    },
    {
      number: 4,
      title: "Développement MVP",
      description: "Nous développons un prototype fonctionnel et évolutif en 7 jours",
      icon: Code
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Livraison express en 7 jours",
      description: "Quand les autres sont encore en phase de devis, vous aurez déjà un produit à montrer."
    },
    {
      icon: IterationCw,
      title: "Itérations post-livraison incluses",
      description: "Cycle d'amélioration basé sur les premiers retours utilisateurs pour affiner votre proposition de valeur."
    },
    {
      icon: Briefcase,
      title: "Accompagnement stratégique",
      description: "Notre expertise tech au service de votre vision business - nous ne sommes pas que des exécutants."
    },
    {
      icon: BarChart3,
      title: "Suivi de projet transparent",
      description: "Accès à notre application interne pour suivre l'avancée de votre projet en temps réel."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          De l'idée au prototype en 7 jours chrono
        </h2>
        <p className="text-white/80 text-lg">
          Nous ne construisons pas simplement un produit. Nous créons la vitrine technique qui prouve la viabilité de votre vision. Un prototype complet, fonctionnel et impressionnant - prêt à convaincre investisseurs, partenaires et premiers utilisateurs.
        </p>
      </div>

      {/* Pricing box */}
      <div className="bg-forest-light/30 backdrop-blur-xl rounded-xl p-8 mt-12 border border-mint/10">
        <h3 className="text-2xl font-bold text-mint mb-8 text-center">Pack complet à 2000€</h3>
        
        {/* Process */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-mint" />
              </div>
              <div className="bg-mint text-forest font-bold rounded-full w-8 h-8 flex items-center justify-center mb-3">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-mint" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-mint mr-2 flex-shrink-0" /> 
                  {benefit.title}
                </h4>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferProcess;


import { AlertTriangle, Clock, FileWarning, PiggyBank } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Les délais s'éternisent",
      description: "Pendant que vous attendez des mois pour un premier MVP, vos concurrents avancent et votre fenêtre d'opportunité se referme."
    },
    {
      icon: PiggyBank,
      title: "Les budgets explosent",
      description: "Les estimations initiales sont rarement respectées, et vous vous retrouvez avec des coûts imprévus qui grèvent votre trésorerie."
    },
    {
      icon: FileWarning,
      title: "La communication est difficile",
      description: "Vous ne parlez pas le même langage que les développeurs, ce qui mène à des malentendus et des résultats décevants."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Le développement tech ne devrait pas être votre frein
        </h2>
        <p className="text-white/80 text-lg">
          Entre les délais interminables, les budgets qui explosent et la difficulté à trouver les bonnes compétences, lancer un projet digital devient un parcours du combattant. Pendant ce temps, vos financeurs attendent des résultats.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {painPoints.map((point, index) => (
          <div key={index} className="bg-forest-light/30 backdrop-blur-sm p-6 rounded-xl border border-mint/10">
            <div className="w-12 h-12 bg-[#ea384c]/10 rounded-lg flex items-center justify-center mb-4">
              <point.icon className="w-6 h-6 text-[#ea384c]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
            <p className="text-white/70">{point.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Notre mission
        </h2>
        <p className="text-white/80 text-lg">
          Chez Elano, nous rendons l'innovation accessible, rapide et concrète. Notre ambition est de booster l'entrepreneuriat en France en proposant des solutions digitales abordables et de qualité, tout en accompagnant les porteurs de projets dans leur stratégie produit.
        </p>
      </div>
    </div>
  );
};

export default PainPoints;

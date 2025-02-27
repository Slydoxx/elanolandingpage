
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment garantissez-vous un prototype en 7 jours ?",
      answer: (
        <div className="space-y-3">
          <p>Nous avons une méthodologie ultra-cadrée :</p>
          <ul className="space-y-1 list-inside">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-mint rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Un atelier Discovery pour cadrer les besoins dès le jour 1.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-mint rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Un prototypage rapide basé sur du low-code et la compréhension des features du MVP.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-mint rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Une phase de test et validation en fin de sprint.</span>
            </li>
          </ul>
          <p>Nous limitons volontairement nos projets à 4 entreprises par mois pour assurer un accompagnement optimal.</p>
        </div>
      )
    },
    {
      question: "Et si mon projet est plus complexe ?",
      answer: (
        <div className="space-y-3">
          <p>Si votre besoin dépasse les 7 jours, nous découpons le projet en sprints successifs.</p>
          <p>Exemple : Un premier sprint pour le prototype fonctionnel, puis un second pour l'intégration des fonctionnalités avancées.</p>
          <p>L'objectif est d'avoir un MVP testable rapidement sans attendre des mois de développement.</p>
        </div>
      )
    },
    {
      question: "Pourquoi le low-code et l'IA ?",
      answer: (
        <div className="space-y-3">
          <ul className="space-y-1 list-inside">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-mint rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Le low-code permet de développer 5x plus vite en automatisant certaines tâches de développement.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-mint rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>L'IA optimise vos process métier en automatisant des tâches chronophages.</span>
            </li>
          </ul>
          <p>Résultat : Moins de coûts, plus de rapidité et un time-to-market réduit.</p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Vous avez des questions?</h2>
            <p className="text-2xl font-bold text-white">
              Nous avons 
              <br className="block sm:hidden" />
              <span className="bg-mint px-3 py-1 rounded-lg text-forest ml-1">les réponses!</span>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-forest-light/30 backdrop-blur-xl rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-white hover:no-underline py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-forest-light/30 backdrop-blur-xl rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vous avez encore une question ?
            </h3>
            <Button 
              onClick={() => window.open('https://calendly.com/thom-cademi/30min', '_blank')}
              className="bg-mint hover:bg-mint/80 text-forest font-medium inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

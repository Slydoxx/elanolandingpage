
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
      answer: "Nous utilisons le low-code couplés à une méthode agile éprouvée."
    },
    {
      question: "Et si mon projet est plus complexe ?",
      answer: "Nous adaptons notre accompagnement avec des offres sur-mesure."
    },
    {
      question: "Pourquoi le low-code et l'IA ?",
      answer: "Pour aller plus vite, réduire les coûts et valider votre produit sans développement lourd."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Vous avez des questions?</h2>
            <p className="text-2xl font-bold text-white">Nous avons <span className="bg-mint px-3 py-1 rounded-lg text-forest">les réponses!</span></p>
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

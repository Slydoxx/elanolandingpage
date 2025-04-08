
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Ce qu'en disent nos clients</h2>
          <p className="text-white/80">Des entrepreneurs et startups qui nous ont fait confiance</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Grâce à Elano, nous avons intégré un système de paiement sécurisé en 7 jours alors que nos précédents prestataires parlaient de plusieurs mois. Décisif pour notre levée de fonds.",
              author: "Léa Martin",
              role: "Fondatrice de PayQuick",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            },
            {
              quote: "En une semaine, nous sommes passés d'une idée à un prototype fonctionnel que nous avons présenté à notre incubateur. Résultat: une subvention de 60K€ obtenue!",
              author: "Thomas Dubois",
              role: "CEO de GreenTech Solutions",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            },
            {
              quote: "L'équipe d'Elano nous a guidés de A à Z dans la conception de notre application. Leur outil de suivi client nous a permis de rester impliqués à chaque étape.",
              author: "Sophie Lambert",
              role: "Fondatrice de EduShare",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-forest-light p-8 rounded-xl relative border border-mint/10">
              <Quote className="text-mint w-8 h-8 mb-4" />
              <p className="text-white/90 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

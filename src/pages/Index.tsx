
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prototype en 7 jours | Transformez votre idée en produit tech | Elano.io</title>
        <meta name="description" content="Transformez votre idée en prototype fonctionnel en 7 jours. Une offre tout-en-un pour les entrepreneurs incubés, startups et porteurs de projets tech." />
        <meta name="keywords" content="prototype digital, MVP, startup, développement rapide, prototype 7 jours, incubateur, levée de fonds, financement startup" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prototype en 7 jours | Transformez votre idée en produit tech | Elano.io" />
        <meta property="og:description" content="Transformez votre idée en prototype fonctionnel en 7 jours. Une offre tout-en-un pour les entrepreneurs incubés, startups et porteurs de projets tech." />
        <meta property="og:url" content="https://elano.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prototype en 7 jours | Elano.io" />
        <meta name="twitter:description" content="Transformez votre idée en prototype fonctionnel en 7 jours. Une offre dédiée aux entrepreneurs en phase d'amorçage." />
        <link rel="canonical" href="https://elano.io" />
        <link rel="alternate" hrefLang="fr" href="https://elano.io" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Paris" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Elano.io",
            "description": "Création de prototypes digitaux en 7 jours pour entrepreneurs et startups",
            "url": "https://elano.io",
            "logo": "https://elano.io/lovable-uploads/b863afae-3067-463c-a953-05bf94487f54.png",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "FR",
              "addressLocality": "Paris"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.8566",
              "longitude": "2.3522"
            },
            "areaServed": [
              "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Strasbourg", 
              "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "France"
            ],
            "serviceType": ["Prototype en 7 jours", "MVP startup", "Développement tech rapide", "Accompagnement startup"],
            "priceRange": "€€€",
            "offers": {
              "@type": "Offer",
              "price": "2000",
              "priceCurrency": "EUR",
              "description": "Prototype en 7 jours - Lancement Tech Clé en Main",
              "availability": "LimitedAvailability"
            },
            "sameAs": ["https://elano.io"],
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://calendly.com/thom-cademi/30min"
              },
              "result": {
                "@type": "Reservation",
                "name": "Réservation d'un appel découverte gratuit"
              }
            }
          }
        `}
        </script>
      </Helmet>
      <main className="min-h-screen" itemScope itemType="https://schema.org/WebSite">
        <header>
          <Navbar />
        </header>
        <Hero />
        <section id="pain-points" aria-label="Problématiques" className="py-16">
          <PainPoints />
        </section>
        <section id="offer" aria-label="Notre offre" className="py-16" itemScope itemType="https://schema.org/Service">
          <Offer />
        </section>
        <section id="testimonials" aria-label="Témoignages clients" className="py-16">
          <Testimonials />
        </section>
        <section id="faq" aria-label="Questions fréquentes" className="py-16" itemScope itemType="https://schema.org/FAQPage">
          <FAQ />
        </section>
        <section id="cta" aria-label="Appel à l'action" className="py-16">
          <CallToAction />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Index;

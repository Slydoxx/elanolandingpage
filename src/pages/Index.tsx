
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Services from "@/components/Services";
import MarketplacePreview from "@/components/MarketplacePreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Créez votre prototype digital en 1 semaine | Elano.io - Développement Low-Code</title>
        <meta name="description" content="Transformez vos idées en prototypes fonctionnels en seulement 1 semaine grâce à notre expertise en développement low-code et intelligence artificielle. Découvrez notre méthodologie unique." />
        <meta name="keywords" content="prototype digital, développement low-code, MVP, startup, innovation, intelligence artificielle, automatisation, développement rapide" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Créez votre prototype digital en 1 semaine | Elano.io" />
        <meta property="og:description" content="Transformez vos idées en prototypes fonctionnels en 1 semaine. Expertise en développement low-code et IA." />
        <meta property="og:url" content="https://elano.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elano.io - Prototypes Digitaux Low-Code" />
        <meta name="twitter:description" content="Créez votre prototype digital en 1 semaine avec notre expertise low-code" />
        <link rel="canonical" href="https://elano.io" />
      </Helmet>
      <main className="min-h-screen" itemScope itemType="https://schema.org/WebSite">
        <header>
          <Navbar />
        </header>
        <Hero />
        <section aria-label="Statistiques clés" className="py-16">
          <Stats />
        </section>
        <section aria-label="Notre méthodologie" className="py-16" itemScope itemType="https://schema.org/Service">
          <Features />
        </section>
        <section aria-label="Nos services" className="py-16" itemScope itemType="https://schema.org/Service">
          <Services />
        </section>
        <section aria-label="Marketplace de projets" className="py-16">
          <MarketplacePreview />
        </section>
        <section aria-label="Questions fréquentes" className="py-16" itemScope itemType="https://schema.org/FAQPage">
          <FAQ />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Index;

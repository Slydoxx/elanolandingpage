
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
        <title>Créez votre prototype digital en 1 semaine | Services de développement low-code</title>
        <meta name="description" content="Transformez vos idées en prototypes fonctionnels en seulement 1 semaine grâce à notre expertise en développement low-code et intelligence artificielle." />
      </Helmet>
      <main className="min-h-screen">
        <header>
          <Navbar />
        </header>
        <Hero />
        <section aria-label="Statistiques clés">
          <Stats />
        </section>
        <section aria-label="Notre méthodologie">
          <Features />
        </section>
        <section aria-label="Nos services">
          <Services />
        </section>
        <section aria-label="Marketplace de projets">
          <MarketplacePreview />
        </section>
        <section aria-label="Questions fréquentes">
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


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Services from "@/components/Services";
import MarketplacePreview from "@/components/MarketplacePreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <MarketplacePreview />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;

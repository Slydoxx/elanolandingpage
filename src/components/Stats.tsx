
const Stats = () => {
  const cards = [
    {
      title: "Mars - Place disponible",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "Company logo 1"
    },
    {
      title: "Mars - Place disponible",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Company logo 2"
    },
    {
      title: "Mars - Place disponible",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Company logo 3"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-mint">3 places</span> disponibles en Mars
          </h2>
          <p className="text-white/80 text-lg">
            Pour garantir un accompagnement d'excellence, nous limitons volontairement notre capacité à 3 entreprises par mois
          </p>
        </div>
        
        <div className="relative h-[250px] max-w-3xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="absolute w-full max-w-[260px] rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:z-10 bg-forest-light border border-mint/20"
              style={{
                left: `${index * 10}%`,
                zIndex: index,
              }}
            >
              <div className="relative p-6">
                <div className="w-12 h-12 rounded-full bg-mint/10 mb-4 flex items-center justify-center">
                  <span className="text-mint font-bold">{index + 1}</span>
                </div>
                <p className="text-mint font-medium text-lg">{card.title}</p>
                <span className="text-white/60 text-sm">Réservez maintenant</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

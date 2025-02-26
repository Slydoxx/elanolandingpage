
const Stats = () => {
  const cards = [
    {
      title: "Place 1",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Collaboration workspace"
    },
    {
      title: "Place 2",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Team meeting"
    },
    {
      title: "Place 3",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Digital development"
    },
    {
      title: "Place 4",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      alt: "Innovation technology"
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            4 places disponibles par mois
          </h2>
          <p className="text-white/80 text-lg">
            Pour garantir un accompagnement d'excellence, nous limitons volontairement notre capacité à 4 entreprises par mois
          </p>
        </div>
        
        <div className="relative h-[400px] max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="absolute w-full max-w-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:z-10"
              style={{
                left: `${index * 8}%`,
                zIndex: index,
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent opacity-70" />
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-mint font-bold text-xl">{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

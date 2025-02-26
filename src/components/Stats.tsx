
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

  const handleCardClick = () => {
    window.open('https://calendly.com/thom-cademi/30min', '_blank');
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-white border-b-2 border-[#ea384c]">3 places</span> disponibles en Mars
          </h2>
          <p className="text-white/80 text-lg">
            Pour garantir un accompagnement d'excellence, nous limitons volontairement notre capacité à 4 entreprises par mois
          </p>
        </div>
        
        <div className="relative h-[200px] max-w-4xl mx-auto">
          {/* Available slots */}
          {cards.map((card, index) => (
            <div
              key={card.title}
              onClick={handleCardClick}
              className="absolute w-[300px] h-[160px] rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:z-10 bg-forest-light border border-[#ea384c]/20 cursor-pointer"
              style={{
                left: `${index * 10}%`,
                zIndex: index,
              }}
            >
              <div className="relative p-6">
                <div className="w-12 h-12 rounded-full bg-[#ea384c]/10 mb-4 flex items-center justify-center">
                  <span className="text-[#ea384c] font-bold">{index + 1}</span>
                </div>
                <p className="text-[#ea384c] font-medium text-lg">{card.title}</p>
                <span className="text-white/60 text-sm">Réservez maintenant</span>
              </div>
            </div>
          ))}

          {/* Reserved slot */}
          <div
            className="absolute w-[300px] h-[160px] rounded-xl overflow-hidden transform bg-forest-light border border-[#11B57F]/20"
            style={{
              right: '0',
              zIndex: 0,
            }}
          >
            <div className="relative p-6">
              <div className="w-12 h-12 rounded-full bg-[#11B57F]/10 mb-4 flex items-center justify-center">
                <span className="text-[#11B57F] font-bold">4</span>
              </div>
              <p className="text-[#11B57F] font-medium text-lg">Mars - Réservé</p>
              <span className="text-white/60 text-sm">Une entreprise a réservé son sprint</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

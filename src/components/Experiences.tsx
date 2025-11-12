const Experiences = () => {
  const experiences = [
    {
      title: "Ciudad de las Artes",
      emoji: "🎭",
      description: "Arquitectura futurista",
    },
    {
      title: "Bioparc",
      emoji: "🦁",
      description: "Naturaleza salvaje",
    },
    {
      title: "Mercado Central",
      emoji: "🥘",
      description: "Gastronomía local",
    },
    {
      title: "Playa Malvarrosa",
      emoji: "🏖️",
      description: "Arena y sol",
    },
    {
      title: "Coworkings",
      emoji: "💻",
      description: "Espacios de trabajo",
    },
    {
      title: "Cafeterías",
      emoji: "☕",
      description: "Cultura de café",
    },
  ];

  return (
    <section id="experiencias" className="py-20 bg-gradient-to-b from-background to-sand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Vive <span className="gradient-text">Valencia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los lugares que hacen única a nuestra ciudad, desde
            arquitectura moderna hasta playas mediterráneas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-center space-y-3">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {experience.emoji}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground">{experience.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

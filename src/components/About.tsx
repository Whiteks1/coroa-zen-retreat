const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-sand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Hospitalidad que{" "}
            <span className="gradient-text">se adapta a ti</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Coroa Silence combina hospitalidad y tecnología para ofrecerte una
            experiencia de alojamiento mediterráneo, flexible y conectada. Ideal
            para viajeros que buscan confort, diseño y autonomía.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold">Diseño Inteligente</h3>
              <p className="text-muted-foreground">
                Espacios pensados para el confort y la productividad
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold">Tecnología Sin Fricción</h3>
              <p className="text-muted-foreground">
                Check-in digital y gestión automatizada
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-valencia-orange/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">🌊</span>
              </div>
              <h3 className="text-xl font-semibold">Calma Mediterránea</h3>
              <p className="text-muted-foreground">
                El equilibrio perfecto entre vida y trabajo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
